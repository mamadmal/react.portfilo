import { useEffect, useState } from "react"

export const OnlineCheck = ()=>{

    const [offlineMessage, setOfflineMessage] = useState(null);


    useEffect(()=>{
        const handleOffline = ()=>{
            console.log("offline")
            setOfflineMessage(
        <div className="absolute bottom-5 left-2 border border-slate-950 p-2 rounded-md bg-blue">
          آفلاین شدی! اتفاق خاصی نمیوفته فقط خواستم بدونی.
        </div>
      );

        }

        const handleOnline = ()=>{
            console.log('online')
            setOfflineMessage(null)
        }

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        
    }, [])


    return <div>{offlineMessage}</div>
}