'use client'


import { getUser } from "@/api/enlaces";
import { Usuario } from "@/types";
import { useEffect, useEffectEvent, useState } from "react";
import { CardUser } from "../components/Carduser";




const userPage =() => {

    const [user,setUser] = useState<Usuario>()

    useEffect(()=>{getUser().then(setUser);},[])
    console.log("esto es una prueba")

    console.log(user)

return(
    <div className="perfil-container">
        {user && <CardUser user={user}/>}
    </div>
)

}


export default userPage;