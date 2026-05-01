'use client'

import api from "@/api/axios";
import { getUnPost, postComentarios } from "@/api/enlaces";
import { Post } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CardComentarios } from "./CardComentarios";

export const Comentarios = ({ id }: { id: string }) => {
  const router = useRouter();
  const [contenido, setContenido] = useState<string>("");
  const [post, setPost] = useState<Post>();

  const loadPost = async () => {
    const data = await getUnPost(id);
    setPost(data);
  };

  useEffect(() => {
    loadPost();
  }, [id]);

  const handleComment = async () => {
    if (!contenido.trim()) return;
    await postComentarios(id, contenido);
    setContenido("");
    await loadPost();
  };

  const handleLike = async () => {
    await api.post(`/posts/${id}/like`);
    await loadPost();
  };

  const handleRetweet = async () => {
    await api.post(`/posts/${id}/retweet`);
    await loadPost();
  };

  return (
    <div className="comentarios-box">
      <div className="post-info">
        <h2 className="post-user">{post?.autor.username}</h2>
        <p className="post-text">{post?.contenido}</p>
        <p>
          Publicado: {post ? new Date(post.createdAt).toLocaleString("es-ES") : "-"}
        </p>

        <div className="acciones">
          <button onClick={handleLike}>Like {post?.likes.length ?? 0}</button>
          <button onClick={handleRetweet}>Retweet {post?.retweets.length ?? 0}</button>
        </div>
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
        {post?.comentarios.map((e) => (
          <CardComentarios key={e._id} comentarios={e} />
        ))}
      </div>

      <button className="volver-btn" onClick={() => router.push("/")}>
        Volver
      </button>
    </div>
  );
};
