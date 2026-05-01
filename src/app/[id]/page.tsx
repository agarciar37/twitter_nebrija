'use client'

import { getPerfil, postComentarios } from "@/api/enlaces";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { Comentarios } from "../components/ComentarioPublicar";
import { Usuario } from "@/types";




const comentarios = () => {
    const router= useRouter();
    const { id } = useParams<{id:string}>();

    
    
   
    
    return (
    
    <div className="comentarios-container">
        <Comentarios id={id}/>
    </div>

    )



}

export default comentarios