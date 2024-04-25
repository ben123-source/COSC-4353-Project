import { useNavigate } from "react-router-dom";

const NavbarLO = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className='bg-[green] w-screen h-14 flex justify-between items-center'>
                <div className='flex items-center h-full ml-2'>
                    <button onClick={() => navigate("/")} className='hover:underline-dashed text-black hover:cursor-pointer ml-3'>FueledUp</button>
                </div>
                <div className='flex items-center justify-center gap-4 mr-6'>
                    <ul className='flex gap-6 mr-4'>
                        <button onClick={() => navigate("/signup")} className='hover:underline-dashed text-black hover:cursor-pointer'>Signup</button>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarLO;
