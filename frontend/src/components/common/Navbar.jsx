
const Navbar = () => {
  return (
    <div className='absolute flex flex-row items-center justify-between w-full p-2'>
        <div className="ml-10">
            <img src='images/heritageLogo.png' />
        </div>
        <div className="flex mr-10 justify-between text-white">
            <span className="mx-4">About</span>
            <span className="mx-4">Facilities</span>
            <span className="mx-4">Room & Suits</span>
            <span className="mx-4">Gallery</span>
            <span className="mx-4">Offers</span>
        </div>
    </div>
  )
}

export default Navbar