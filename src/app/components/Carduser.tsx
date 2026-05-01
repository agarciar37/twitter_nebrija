import { Usuario } from "@/types";
import { CardHome } from "./CardHome";
import { useMemo, useState } from "react";
import { Paginador } from "./Paginador";

const PAGE_SIZE = 10;

export const CardUser = ({ user }: { user: Usuario }) => {
  const [page, setPage] = useState(1);
  const totalPaginas = Math.max(1, Math.ceil(user.posts.length / PAGE_SIZE));

  const postsPaginados = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return user.posts.slice(start, start + PAGE_SIZE);
  }, [page, user.posts]);

  return (
    <div className="perfil-box">
      <div className="perfil-header">
        <h1 className="perfil-username">{user.user.username}</h1>
      </div>

      <div className="perfil-posts">
        {postsPaginados.map((e) => (
          <CardHome key={e._id} post={e} />
        ))}
      </div>

      <Paginador page={page} setPage={setPage} totalpaginas={totalPaginas} />
    </div>
  );
};
