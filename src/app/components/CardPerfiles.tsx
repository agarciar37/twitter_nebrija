import api from "@/api/axios";
import { Usuario } from "@/types"
import { CardHome } from "./CardHome";
import { useRouter } from "next/navigation";




export const CardPerfiles =({user}:{user:Usuario}) => {

    const router= useRouter()

    const handleSeguir = async () => {
  await api.post(`/users/${user.user._id}/follow`);
   
};

    return(
  <div className="perfil-box">

    <div className="perfil-header">
      <h2 className="perfil-username">{user.user.username}</h2>

      <button className="seguir-btn" onClick={handleSeguir}>
        Seguir
      </button>
    </div>

    <div className="perfil-posts">
      {user.posts.map((e)=> (
        <CardHome key={e._id} post={e}/>
      ))}
    </div>

    <button 
      className="volver-btn"
      onClick={()=>router.push("/")}
    >
      Volver
    </button>

  </div>
)
}