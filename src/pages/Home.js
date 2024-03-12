import Navbar from "../components/HomeNavbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl mt-8">Home page where users will log in</h1>
            <div className="flex justify-center mt-8">
                <div className="w-96 p-4 border border-black rounded-lg bg-white flex">
                    {/* Login Form */}
                    <form className="w-1/2 mr-2">
                        <h2 className="text-lg font-semibold mb-4">Login</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="check" className="mr-2"/>
                            <label htmlFor="check">Remember me</label>
                            <button className="ml-auto text-sm text-blue-500 hover:underline">Forgot password?</button>
                        </div>
                        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">Login Now</button>
                    </form>
                    {/* Signup Form */}
                    <form className="w-1/2 ml-2">
                        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Create your password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">Sign Up Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
