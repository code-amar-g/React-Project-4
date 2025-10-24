
function Nav() {
  return (
    <div className="flex h-40 items-center justify-around z-10 bg-blue-400 ">
        <div className="w-22">
            <img className="w-20 cursor-pointer hover:w-22 duration-200 ease-in-out " src="/public/imgs/mithai.png"/>
        </div>

        <div className="w-60 flex justify-center gap-5 text-white font-bold cursor-pointer">
            <p>HOME</p>
            <p>CONTECT</p>
            <p>ORDER</p>
        </div>
    </div>
  )
}

export default Nav