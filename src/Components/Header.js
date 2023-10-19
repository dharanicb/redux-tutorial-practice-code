import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav>
        <ul className='flex flex justify-around'>
            <li onClick={()=> navigate("/")} className='m-[10px] nav-bar'>Home</li>
            <li onClick={()=> navigate("/create")} className='m-[10px] nav-bar'>CreateTodo</li>
            <li onClick={()=> navigate("/profile")} className='m-[10px] nav-bar'>Create Profile</li>
            <li onClick={()=> navigate("/user")} className='m-[10px] nav-bar'>UserDatails</li>
            <li onClick={()=> navigate("/movie")} className='m-[10px] nav-bar'>Movie List</li>
        </ul>
    </nav>
  )
}

export default Header