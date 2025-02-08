import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCopy, FaCheck } from "react-icons/fa";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

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
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]); // Removed userId to prevent infinite re-renders

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login");
    };

    if (loading) return <p className="text-center text-gray-500">Loading user details...</p>;

    const referralLink = `http://localhost:3003/register/${user?.invitecode || ""}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return user ? (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile Sidebar Toggle */}
            <button 
                className="absolute top-4 left-4 text-gray-700 lg:hidden" 
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 flex flex-col transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0`}> 
                <div className="flex items-center space-x-3">
                    <BsPersonCircle className="text-4xl text-gray-700" />
                    <h2 className="text-xl font-semibold text-gray-700">{user.name}</h2>
                </div>
                <p className="text-gray-500 mt-2">{user.email}</p>

                {/* Navigation */}
                <nav className="mt-6">
                    <Link to={`/user`} className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Dashboard</Link>
                    <Link to="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">Settings</Link>
                    <button 
                        onClick={handleLogout} 
                        className="mt-6 flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 w-full"
                    >
                        <FiLogOut className="mr-2" />
                        Logout
                    </button>
                </nav>
            </aside>
            
            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-8">
                <h1 className="text-3xl font-bold text-gray-800 flex flex-wrap gap-2">
                    Welcome <span className="text-pink-500">{user.name}</span>
                </h1>

                {/* Subscription Link */}
                <Link to={'/refrel'} className="text-gray-50 text-center mt-2 p-2 w-32 rounded-full bg-pink-500 block">
                    Subscribe
                </Link>

                {/* Subscription Details */}
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

                        {/* Referral Link Section */}
                        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-full max-w-md mt-4">
                            <p className="text-lg font-semibold mb-2">Your Referral Link</p>
                            <div className="flex items-center border p-2 rounded-md w-full bg-gray-100">
                                <input
                                    type="text"
                                    value={referralLink}
                                    readOnly
                                    className="w-full bg-transparent outline-none text-gray-700"
                                />
                                <button
                                    onClick={copyToClipboard}
                                    className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                >
                                    {copied ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            {copied && <p className="text-green-600 mt-2">Copied to clipboard!</p>}
                        </div>
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
