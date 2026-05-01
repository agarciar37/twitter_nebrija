'use client'

import api from "@/api/axios";
import { Usuario } from "@/types";
import { CardHome } from "./CardHome";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Paginador } from "./Paginador";

const PAGE_SIZE = 10;

export const CardPerfiles = ({ user }: { user: Usuario }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const totalPaginas = Math.max(1, Math.ceil(user.posts.length / PAGE_SIZE));
  const postsPaginados = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return user.posts.slice(start, start + PAGE_SIZE);
  }, [page, user.posts]);

  const handleSeguir = async () => {
    await api.post(`/users/${user.user._id}/follow`);
  };

  return (
    <div className="perfil-box">
      <div className="perfil-header">
        <h2 className="perfil-username">{user.user.username}</h2>
        <button className="seguir-btn" onClick={handleSeguir}>
          Seguir / Dejar de seguir
        </button>
      </div>

      <div className="perfil-posts">
        {postsPaginados.map((e) => (
          <CardHome key={e._id} post={e} />
        ))}
      </div>

      <Paginador page={page} setPage={setPage} totalpaginas={totalPaginas} />

      <button className="volver-btn" onClick={() => router.push("/")}>
        Volver
      </button>
    </div>
  );
};
