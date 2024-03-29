import { useState } from "react";
import { useRef } from "react";


function Nav() {

  const [menue, setMenue] = useState('menu')

  const ref = useRef()
  const clickRef = ()=>{
    ref.current.style.display = "flex"
  }
  const clickRefClose = ()=>{
    ref.current.style.display = "none"
  }


  const menueClick = ()=>{

    if (menue === 'menu') {
      setMenue('close');
      clickRef();
      

    } else {
      setMenue('menu');
      clickRefClose();
 
    };
  }


  return (
    <nav className="w-full" id="head-d">
    <header  className="main-sectoion flex justify-center m-2 text-3xl text-[#F1B4BB] md:text-[#1F4172] md:absolute md:m-1 md:left-4">
        <h1 className="txt-shadoww md:border-0 border-b-4 border-slate-500 p-5 md:p-0 font-bold md:mt-2 md:text-slate-200 cursor-pointer"> پورتفیلو</h1>
    </header>

    <header>

        <button onClick={() => menueClick()} className="material-symbols-outlined absolute top-7 right-3 text-4xl  hover:bg-slate-900 hover:text-[#F1B4BB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F1B4BB] py-1 px-2 rounded-lg md:hidden" > 
            {menue}
        </button>


     <ul ref={ref} className=" z-[90000] text-2xl rounded-lg md:rounded-0 bg-[#F1B4BB] w-full md:bg-[#13204326] md:shadow-lg md:text-2xl p-3 pb-4 text-[#FDF0F0] absolute hidden md:static md:block md:flex flex">
            <li className="md:mx-7 p-2 "><a href="/">خانه</a></li>
            <li className="md:mx-5 md:border-0 p-2"><a>پروژه ها</a></li>
            <li className="md:mx-5 md:border-0 p-2 "><a href="#aboutme">درباره من</a></li>
      </ul>
        
    
    </header>
    </nav>
  )
}

export default Nav;