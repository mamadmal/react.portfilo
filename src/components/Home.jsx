import { ResumeSlider } from "./ResumeSlider/ResumeSlider";
import backgroundImage from '../assets/svg-bg.svg'
import { Samples } from "./Samples/Samples";
function Home (){


    return(
        <main>
            <section id="mian-sec" class="main-sectoion flex items-end justify-center md:h-[45vh] h-[35vh]"
            style={{
                backgroundImage : `url(${backgroundImage})`
            }}
            >
        <div class=" md:w-1/2 border border-slate-500 rounded-lg text-center p-4 center-divMain">
            <h1 class="text-3xl font-bold mb-4 "> خوش آمدید!</h1>
            <span>مثالی از پروژه های اجرا شده را در زیر میتوانید ببینید.</span>
        </div>
    </section>
    <div class="flex justify-center">
        <hr class="w-5/6"/>
    </div>


    
    <ResumeSlider />

    <Samples />




    


    <section id="aboutme" class="mt-9 flex flex-col items-center md:flex-row md:justify-end md:items-start">
        <div class="md:text-xl md:mt-2 md:absolute md:right-[2%]  text-[#132043] bg-[#F1B4BB] mb-3 border border-slate-500 rounded-lg mr-4 p-2 text-4xl w-fit ">
            <h1>درباره من</h1>
        </div>

        <div class="md:w-4/5 border border-slate-500 rounded-lg m-2 p-2 text-3xl w-fit ">
            <span>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی</span>
            <h3>برنامه نویس فرانت اند</h3>
        </div>

        <div class="md:text-xl md:absolute md:right-[2%] md:mt-[80px] border border-slate-500 rounded-lg m-2 p-2 text-3xl w-fit hover:text-[#132043] hover:bg-[#F1B4BB]">
            <a href="" >برنامه نویس </a>
        </div>
    </section>
        </main>
    )
}


export default Home; 