

import api from "@/api/axios";
import { Post } from "@/types";
import { useRouter } from "next/navigation";


export const CardHome = ({post}:{post:Post}) => {

  const router=useRouter()

const handlePerfil = async () =>{
  router.push(`/perfiles/${post.autor._id}`)
}

const handleLike = async () => {
  await api.post(`/posts/${post._id}/like`);
   
};
const handleRetweet = async () => {
  await api.post(`/posts/${post._id}/retweet`);
   
};
const handleComment = async () => {
  router.push(`/${post._id}`)
   
};
return(
  <div className="post-card">

    <div className="header">
      <h3>{post.autor.username}</h3>
      <button onClick={handlePerfil} className="perfil-btn">
        Ver perfil
      </button>
    </div>

    <p>{post.contenido}</p>

    <div className="acciones">
      <button onClick={handleLike}>
        Like {post.likes.length}
      </button>

      <button onClick={handleRetweet}>
        Retweet {post.retweets.length}
      </button>

      <button onClick={handleComment}>
        Comentar {post.comentarios.length}
      </button>
    </div>

  </div>
)


}