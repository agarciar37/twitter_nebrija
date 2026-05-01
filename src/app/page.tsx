'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "@/types";
import { getHome, postPost } from "@/api/enlaces";
import { CardHome } from "./components/CardHome";
import { Paginador } from "./components/Paginador";


 const Home=() => {

  const router=useRouter()
  

  const [post,setPost] = useState<Post[]>([])
  const [page,setPage] = useState<number>(1)
  const [totalPaginas,setTotalPaginas] = useState<number>(0)
  const [contenido,setContenido] = useState<string>("")

 useEffect(()=>{
   getHome(page).then((e)=> {
    setPost(e.posts);
    setTotalPaginas(e.totalPaginas)
  })
 },[page])
  
const handlePublicacion = async() => {
  await postPost(contenido);
  setContenido("");
  setPage(1);
}
    
  
  return (
  <div className="home">

    <div className="crear-post">
      <input 
        placeholder="¿Qué estás pensando?"
        value={contenido}
        onChange={(e)=> setContenido(e.target.value)}
      />

      <button onClick={handlePublicacion}>
        Publicar
      </button>
    </div>

    <div className="feed">
      {post.map((e)=> (
        <CardHome key={e._id} post={e}/>
      ))}
    </div>

    <Paginador 
      page={page} 
      totalpaginas={totalPaginas} 
      setPage={setPage}
    />

  </div>
);
}

export default Home;
