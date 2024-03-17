

export const Samples = ()=>{

    const sampleArrays = ["سایت پورتفیلو: tailwind, swipper, React", "محاسبه pH", "مثال لیست", "مثال"]

    
    return (
        <section>
        <div class="center-divMain mr-4 text-3xl w-fit p-3 m-1">
            <h1>نمونه کارها:</h1>
        </div>

        <div class="md:flex flex-wrap justify-center mx-3 md:mx-10 border border-slate-500 rounded-lg">

                    {
                        sampleArrays.map((samp)=>{
                            return(
                                <div class="md:w-[525px] mt-6 md:mx-6 cursor-pointer">
                                    <div  alt="" srcset="" class="rounded-lg border border-slate-500" ></div>
                                        <div class="center-divMain text-2xl p-2 w-fit -m-4 hover:scale-125 ease-in duration-300" >
                                            <h1>{samp}</h1>
                
                </div>
            </div>
                            )
                        })
                    }


            

            

            

            

        
        </div>


    </section>
    )
}