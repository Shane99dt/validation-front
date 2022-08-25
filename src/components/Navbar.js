import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClickBurger = () => {
    if(clicked){
      setClicked(false)
    }else{
      setClicked(true)
    }
  }

  const handleClickListItem = () => {
    if(clicked){
      setClicked(false)
    }
  }

  return(
    <>
      <nav className="p-5 bg-stone-100 shadow md:flex md:items-center md:justify-between text-gray-800 font-medium">
        <div className="flex justify-between items-center ">
          <Link className="text-2xl cursor-pointer uppercase font-semibold" to='/users'>
            Validation
          </Link>

          <button className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={handleClickBurger}>
            <ion-icon name="menu"></ion-icon>
          </button>
        </div>

        <ul className={`md:flex md:items-center md:z-auto md:static md:bg-transparent  w-full left-0 md:w-auto md:py-0 md:pl-0 md:opacity-100
        ${clicked ? ('z-30 pl-7 py-4 fixed bg-stone-100'):('opacity-0 top-[-400px] z-[-1] absolute')}
          transition-all ease-in duration-500 uppercase text-lg`}>
          <li className="mx-4 my-2 md:my-0">
            <Link to='/' className=" hover:text-zinc-500 duration-500" onClick={handleClickListItem}>HOME</Link>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <Link to='/users' className=" hover:text-zinc-500 duration-500" onClick={handleClickListItem}>Users</Link>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <Link to='/new-user' className=" hover:text-zinc-500 duration-500" onClick={handleClickListItem}>New user</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar