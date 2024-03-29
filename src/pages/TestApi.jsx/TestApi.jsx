import { useEffect, useState } from "react"


export default function TestApi (){


    const [testList, setTestList] = useState([])

    async function gelist() {
        try {
          const response = await fetch('https://storage.muhammadalidadi.ir/GE-L01.json');
          const jsonData = await response.json();
          console.log(jsonData.one);
          setTestList(jsonData.one)

        } catch (error) {
          console.error('Error fetching JSON:', error);
        }
      }

    useEffect(()=>{
        gelist();
    }, [])

    return (
        <section className="mt-8 flex justify-center ">

            
            
                <h1>{testList.word}</h1>


           <hr className="w-1/2" />
        </section>
    )
}