import {  Usuario } from "@/types";
import { CardHome } from "./CardHome";



export const CardUser = ({user}:{user:Usuario}) =>{

    return (
  <div className="perfil-box">

    <div className="perfil-header">
      <h1 className="perfil-username">{user.user.username}</h1>
    </div>

    <div className="perfil-posts">
      {user.posts.map((e)=> (
        <CardHome key={e._id} post={e}/>
      ))}
    </div>

  </div>
)
    


    


}