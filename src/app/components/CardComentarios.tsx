import { Comentario } from "@/types";




export const CardComentarios = ({comentarios}:{comentarios:Comentario}) => {

    return (
    <div className="comentario-card">
      <h4 className="comentario-user">{comentarios.autor.username}</h4>
      <p className="comentario-text">{comentarios.contenido}</p>
    </div>
  )

}