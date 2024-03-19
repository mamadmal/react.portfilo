
function Footer() {


    return (
        <footer>
            <footer className="flex md:flex-row flex-col items-center text-2xl m-4 p-3 justify-center">
       
       <a href="#head-d" className="md:mx-4 my-4"><h1>برو بالا</h1></a>
       <a href="#mian-sec" className="md:mx-4 my-4"><h1>پروژه ها</h1></a>
       <a href="#ex-pro" className="md:mx-4 my-4"><h1>نمونه کارها</h1></a>
   </footer>

   <div className="flex justify-center mt-6 ">
       <hr className="w-4/5"/>
   </div>

   <footer className="flex flex-col items-center m-3">
   <iframe src="https://ghbtns.com/github-btn.html?user=mamadmal&type=follow&count=true&size=small" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

        <div className="flex flex-col items-center">
            <span>mo.alidadi@gmail.com</span>
            <span>info@muhammadalidadi.ir</span>
        </div>
   </footer>
        </footer>
    )
  }
  
  export default Footer
  