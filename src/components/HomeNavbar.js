import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/ '); 
    };

    return(
        <div>
            <div className='bg-[green] w-screen h-14 flex justify-between items-center'>
                <div className='flex items-center h-full ml-2'>
                    <button onClick={() => navigate("/")} className='hover:underline-dashed text-black hover:cursor-pointer ml-3'>CompanyTitle</button>
                </div>
                <div className='flex items-center justify-center gap-4 mr-6'>
                    <ul className='flex gap-6 mr-4'>
                        <button onClick={() => navigate("/fuelQuotes")} className='hover:underline-dashed text-black hover:cursor-pointer'>FuelQuoteHistory</button>
                        <button onClick={() => navigate("/profilepage")} className='hover:underline-dashed text-black hover:cursor-pointer'>profilepage</button>
                        <button onClick={handleLogout} className='hover:underline-dashed text-black hover:cursor-pointer'>Logout</button>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
