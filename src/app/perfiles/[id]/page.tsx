'use client'

import { getPerfil } from "@/api/enlaces";
import { CardPerfiles } from "@/app/components/CardPerfiles";
import { Usuario } from "@/types";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";





const Perfiles =() => {
    const router= useRouter();
    const { id } = useParams<{id:string}>();

    const [user,setUser] = useState<Usuario>()

    

    useEffect(()=>{
        getPerfil(id).then(setUser)
    },[])
    return(

    <div className="perfil-container">
        {user && user && <CardPerfiles user={user} />}
    </div>
    )

}
export default Perfiles