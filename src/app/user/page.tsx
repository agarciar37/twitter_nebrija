'use client'

import { getUser } from "@/api/enlaces";
import { Usuario } from "@/types";
import { useEffect, useState } from "react";
import { CardUser } from "../components/Carduser";

const UserPage = () => {
  const [user, setUser] = useState<Usuario>();

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  return <div className="perfil-container">{user && <CardUser user={user} />}</div>;
};

export default UserPage;
