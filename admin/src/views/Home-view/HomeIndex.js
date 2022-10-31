import { useEffect, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

const HomeIndex = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    // navigate(0)
  },[user])
  return (
    <div className='flex justify-center flex-wrap h-screen p-10'>
    
      <Link to='/inventory' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://img.freepik.com/premium-photo/warehouse-worker-working-warehouse-stock-checking-inventory-production-stock-control-warehouse-control-management-business-factory-industry-logistics-warehouse-people_35024-1729.jpg?w=996")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Inventory managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your inventories here</span>
        </div>
      </Link>

      <Link to='/customer' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://www.logisticsbureau.com/blog/wp-content/uploads/2012/05/Blog_What-is-Inventory.png")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Customer managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your Customers here</span>
        </div>
      </Link>

      <Link to='/menu' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=996&t=st=1666063175~exp=1666063775~hmac=fb6e1002b0c2f27e21755ea7483dfa38f9808b8301cb5151ef109c58f48e4289")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Menu managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your menues here</span>
        </div>
      </Link>

      <Link to='#' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://www.logisticsbureau.com/blog/wp-content/uploads/2012/05/Blog_What-is-Inventory.png")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Inventory managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your inventories here</span>
        </div>
      </Link>

      <Link to='#' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://www.logisticsbureau.com/blog/wp-content/uploads/2012/05/Blog_What-is-Inventory.png")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Inventory managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your inventories here</span>
        </div>
      </Link>

      <Link to='#' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://www.logisticsbureau.com/blog/wp-content/uploads/2012/05/Blog_What-is-Inventory.png")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Inventory managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your inventories here</span>
        </div>
      </Link>

      <Link to='#' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://www.logisticsbureau.com/blog/wp-content/uploads/2012/05/Blog_What-is-Inventory.png")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Inventory managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your inventories here</span>
        </div>
      </Link>

      <Link to='#' className='w-1/4 h-[10rem] m-4'>
        <div className='flex flex-col shadow-xl h-full w-full justify-center items-center text-white font-semibold bg-[url("https://www.logisticsbureau.com/blog/wp-content/uploads/2012/05/Blog_What-is-Inventory.png")] object-cover rounded-lg  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
            <span className='text-center text-4xl'>Inventory managment</span>
            <span className='text-md text-[#e2cccc]'>Manage all your inventories here</span>
        </div>
      </Link>

    </div>
  )
}

export default HomeIndex