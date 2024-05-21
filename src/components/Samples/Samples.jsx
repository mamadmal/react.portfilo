import { Link } from "react-router-dom";


export const Samples = ()=>{

    const sampleArrays = [
        
        {
            name : "سایت پورتفیلو: tailwind, swipper, React",
            link : "/"
        },
        {
            name : "محاسبه pH",
            link : "/ph"
        },
        {
            name : "مثال",
            link : "/"
        },
        {
            name : "مثال",
            link : "/"
        }
        
    
    ]

    
    return (
        <section>
        <div class="center-divMain mr-4 text-3xl w-fit p-3 m-1">
            <h1>نمونه کارها:</h1>
        </div>

        <div class="md:flex  flex-wrap justify-center mx-3 px-3 md:mx-10 border border-slate-500 rounded-lg">

                    {
                        sampleArrays.map((samp, index)=>{
                            return(
                                <div class="md:w-[525px] mt-6 md:mx-6 cursor-pointer">
                                    <div  alt="" srcset="" class="rounded-lg border border-slate-500" ></div>
                                        <div class="center-divMain text-2xl p-2 w-fit -m-4 md:hover:scale-125 ease-in duration-300" >
                                            
                                            <Link to={samp.link} key={index}>
                                                <h1>{samp.name}</h1> 
                                            </Link>
                                               
                                            
                                            
                
                </div>
            </div>
                            )
                        })
                    }


            

            

            

            

        
        </div>


    </section>
    )
}