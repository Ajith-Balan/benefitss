import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");
                if (!token) {
                    setError("No token found, please log in.");
                    setLoading(false);
                    navigate('/login');
                    return;
                }

                const res = await axios.get("http://localhost:3003/api/home", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (res.data) {
                    setUser(res.data);
                    const subRes = await axios.get(`http://localhost:3003/api/getsub/${userId}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setSubscription(subRes.data || null);
                } else {
                    setError("Failed to fetch user details.");
                   
                }
            } catch (error) {
                setError(error.response?.data?.msg || "Error fetching data.");
                navigate('/login')
            } finally {
              
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login");
    };

    if (loading) return <p className="text-center text-gray-500">Loading user details...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return user ? (
        <div className="flex h-screen bg-gray-100">
            <button 
                className="absolute top-4 left-4 text-gray-700 lg:hidden" 
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>

            <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 flex flex-col transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0`}> 
                <div className="flex items-center space-x-3">
                    <BsPersonCircle className="text-4xl text-gray-700" />
                    <h2 className="text-xl font-semibold text-gray-700">{user.name}</h2>
                </div>
                <p className="text-gray-500 mt-2">{user.email}</p>
                <nav className="mt-6">
                   <Link to={`/user`}> <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Dashboard</a></Link>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Settings</a>
                    <button 
                        onClick={handleLogout} 
                        className="mt-6 flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 w-full"
                    >
                        <FiLogOut className="mr-2" />
                        Logout
                    </button>
                </nav>
            </aside>
            
            <main className="flex-1 p-6 lg:p-8">
                <h1 className="text-3xl font-bold text-gray-800 flex flex-wrap gap-2">
                    Welcome <span className="text-pink-500">{user.name}</span>
                </h1>
                <p className="text-gray-50 text-center mt-2 p-2 w-32 rounded-full bg-pink-500">Premium</p>
                
                {subscription ? (
                    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700">Subscription Details</h3>
                        <p className="text-gray-600 mt-2"><strong>Amount:</strong> ${subscription.amount}</p>
                        <p className="text-gray-600"><strong>Payment ID:</strong> {subscription.paymentId}</p>
                        <p className="text-gray-600"><strong>Order ID:</strong> {subscription.orderId}</p>
                        <p className="text-gray-600"><strong>Subscribed On:</strong> {new Date(subscription.createdAt).toLocaleDateString()}</p>
                        <p className={`inline-block px-3 py-1 rounded-full text-white text-sm mt-2 ${
                            subscription.status === "active" ? "bg-green-500" : "bg-pink-500"
                        }`}>
                            {subscription.status.toUpperCase()}
                        </p>
                    </div>
                ) : (
                    <p className="mt-4 text-gray-500">No active subscription.</p>
                )}
            </main>
        </div>
    ) : (
        <p className="text-center text-gray-500">No user data available.</p>
    );
};

export default Profile;