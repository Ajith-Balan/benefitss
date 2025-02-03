import countrySchema from './Modeles/country.model.js'
import pkg from 'jsonwebtoken'
import user from './Modeles/user.model.js'
import bcrypt from 'bcrypt'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import order from './Modeles/Subscription.model.js'
import admin from './Modeles/admin.model.js'
import news from './/Modeles/news.model.js'


const {sign}=pkg


export async function addCountry(req,res) {
    try {
        const { Country, photo, Visitvisa, Studyvisa, Workvisa,Heading,Paragraph,About } = req.body;
        if (!(Country && photo && Visitvisa && Studyvisa && Workvisa&&Heading&&Paragraph&&About)) {
            return res.status(400).json({ error: "Invalid input of data. All fields are required." });
        }
        await countrySchema.create({ Country, photo, Visitvisa, Workvisa, Studyvisa,Heading,Paragraph,About });
        return res.status(200).json({ message: "Country created successfully." });
    } catch (error) {
        console.error("Error in addCountry:", error.message);
        return res.status(500).json({ error: "An error occurred while creating the country." });
    }
}

export async function deleteCountry(req, res) {
  try {
      const { id } = req.params;
      if (!id) {
          return res.status(400).json({ error: "Country ID is required." });
      }

      const deletedCountry = await countrySchema.findByIdAndDelete(id);
      if (!deletedCountry) {
          return res.status(404).json({ error: "Country not found." });
      }

      return res.status(200).json({ message: "Country deleted successfully." });
  } catch (error) {
      console.error("Error in deleteCountry:", error.message);
      return res.status(500).json({ error: "An error occurred while deleting the country." });
  }
}


export async function getCountry(req,res){
    try {
        const data=await countrySchema.find({}).then((data)=>{
            return res.status(200).send(data)
        
        })

        if(!data)
            return res.status(400).send("error in getting country")

    } catch (error) {
        return res.status(500).send("error in getting data")
    }
}

export async function getData(req,res){

    try {
        const {id}=req.params;

        const data=await countrySchema.findOne({_id:id}).then((data)=>{
            return res.status(201).send(data)
        })
    } catch (error) {
        return res.status(500).send("internal server error")
    }
}


export async function userRegester(req,res){
  const {name,email,referredBy,password,cpassword,subscription}=req.body;

   if(!(name&&email&&referredBy&&password&&cpassword&&subscription))
    return res.status(400).send("fill all fields")

   if(password!==cpassword)
    return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
user.create({name,password:hpassword,email}).then(()=>{
    return res.status(201).send({msg:"successfully created"})

})
.catch((error)=>{
    return res.status(400).send({error:error})
})
}).catch((error)=>{
res.status(400).send({error:error})
})


}




export async function userLogin(req, res) {
  try {
      const { email, password } = req.body;

      if (!email || !password) {
          return res.status(400).json({
              msg: "Email or password cannot be empty!"
          });
      }

      const usere = await user.findOne({ email });
      if (!usere) {
          return res.status(400).json({
              msg: "Invalid email or password!"
          });
      }

      const isMatch = await bcrypt.compare(password, usere.password);
      if (!isMatch) {
          return res.status(400).json({
              msg: "Invalid email or password!"
          });
      }

   
      const token = pkg.sign(
          {
              email: usere.email,
              userId: usere._id
          },
          process.env.JWT_KEY,
          { expiresIn: "48h" }
      );

      return res.status(200).json({
          msg: "Login successful!",
          token,
          userId: usere._id,  
          email: usere.email,  
      });

  } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
          msg: "An error occurred during login.",
          error: error.message
      });
  }
}
  
 
  
export async function createOrder(req,res){
  const options = {
    amount: 100000,
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
}




export async function verifyPayment(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;

  try {
    
    const existingOrder = await order.findOne({ userId });

    if (existingOrder) {
      return res.status(400).json({ success: false, message: "User already has a subscription" });
    }

    
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      const subscription = new order({
        userId,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        amount: 100,
        status: "Success",
      });

      await subscription.save();
      return res.json({ success: true, message: "Payment verified", subscription });
    } else {
      return res.status(400).json({ success: false, message: "Invalid Signature" });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}



export async function adminRegester(req,res){
  const {username,email,password,cpassword,role}=req.body

  if(!(email,password,cpassword,username,role))
    return res.status(400).send("fields required")

  if((password!==cpassword))
    return res.status(400).send("passwords dont match")

  bcrypt.hash(password,10).then(async(hpassword)=>{
    await admin.create({username,email,password:hpassword,role}).then(()=>{
      return res.status(200).send("Created admin")
    }).catch((error)=>{
      return res.status(500).send("internal error")
    })
  })
}

export async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email or password cannot be empty!" });
    }

    const adminUser = await admin.findOne({ email });
    if (!adminUser) {
      return res.status(400).json({ msg: "Invalid email or password!" });
    }

    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password!" });
    }

    const token = pkg.sign(
      { email: adminUser.email, adminId: adminUser._id, role: adminUser.role },
      process.env.JWT_KEY,
      { expiresIn: "48h" }
    );

    return res.status(200).json({
      msg: "Login successful!",
      token,
      userId: adminUser._id,
      role: adminUser.role
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({ msg: "An error occurred during login." });
  }
}

export async function Home(req, res) {
 
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Unauthorized!" });

    const decoded = pkg.verify(token, process.env.JWT_KEY);
    const users = await user.findById(decoded.userId).select("-password");

    if (!users) return res.status(404).json({ msg: "User not found!" });

    res.status(200).json(users);
} catch (error) {
    res.status(500).json({ msg: "Failed to fetch user!", error: error.message });
}
   
}
  

export async function getSub(req, res) {
  try {
    const { id } = req.params; 

    const data = await order.findOne({ userId: id }); 

    if (!data) {
      return res.status(404).json({ msg: "Subscription not found!" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return res.status(500).json({ msg: "Internal server error", error: error.message });
  }
}


export async function addNews(req,res){
  const {image,title}=req.body
  if(!(image&&title))
    return res.status(400).send("fields missing")
  await news.create({image,title})
  return res.status(200).send("created ")

}

export async function getNews(req,res){
  try {
    const data=await news.find({}).then((data)=>{
      return res.status(200).send(data)
    }) 
  } catch (error) {
    return res.status(500).send("error in getting news")
  }
}


export async function deleteNews(req, res) {
  try {
      const { id } = req.params;
      if (!id) {
          return res.status(400).json({ error: "Country ID is required." });
      }

      const deletedNews = await news.findByIdAndDelete(id);
      if (!deletedNews) {
          return res.status(404).json({ error: "Country not found." });
      }

      return res.status(200).json({ message: "Country deleted successfully." });
  } catch (error) {
      console.error("Error in deleteCountry:", error.message);
      return res.status(500).json({ error: "An error occurred while deleting the country." });
  }
}