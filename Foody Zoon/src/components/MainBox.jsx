
function MainBox() {
  return (
    <div className="h-129 flex items-center justify-center bg-[url(/public/imgs/bg.jpg)] bg-cover">
        <div className=" w-180 h-120 rounded-sm flex flex-wrap items-center justify-center">
          <img className="w-90 h-60 cursor-pointer hover:w-92 hover:h-62 duration-200 ease-in-out" src="/public/imgs/jalebi.png" />
          <img className="w-65 h-60 cursor-pointer hover:w-67 hover:h-62 duration-200 ease-in-out" src="/public/imgs/kalajamun.png" />
          <img className="w-65 h-60 cursor-pointer hover:w-67 hover:h-62 duration-200 ease-in-out" src="/public/imgs/lassi.png" />
          <img className="w-65 h-60 cursor-pointer hover:w-67 hover:h-62 duration-200 ease-in-out" src="/public/imgs/rashmali.png" />
        </div>
    </div>
  )
}

export default MainBox