import { getUnPost, postComentarios } from "@/api/enlaces"
import { Post } from "@/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CardComentarios } from "./CardComentarios"






export const Comentarios= ({id}:{id:string}) => {
    const router= useRouter()

    
    const [contenido,setContenido] = useState<string>("");
    const [post,setPost] = useState<Post>()
    
    useEffect(()=>{
        getUnPost(id).then(setPost)
    },[])
        
        
    const handleComment = ()=> {
     postComentarios(id,contenido)
     getUnPost(id)
    }


    return(
  <div className="comentarios-box">

    <div className="post-info">
      <h2 className="post-user">{post?.autor.username}</h2>
      <p className="post-text">{post?.contenido}</p>
    </div>

    <div className="comentario-input-box">
      <input
        className="comentario-input"
        placeholder="Escribe un comentario..."
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
      />

      <button className="comentario-btn" onClick={handleComment}>
        Publicar
      </button>
    </div>

    <div className="lista-comentarios">
      {post && post.comentarios.map((e)=>(
        <CardComentarios key={e._id} comentarios={e}/>
      ))}
    </div>

    <button 
      className="volver-btn"
      onClick={()=>router.push("/")}
    >
      Volver
    </button>

  </div>
)}