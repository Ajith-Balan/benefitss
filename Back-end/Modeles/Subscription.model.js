import mongoose from 'mongoose';

const SubscriptionSchema=new mongoose.Schema({
    userId: String,
    paymentId: String,
    orderId: String,
    amount: Number,
    status: String,
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model.subscriptions || mongoose.model("subscriptions",SubscriptionSchema)