import api from "@/api/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Login = () => {

  const router = useRouter()
    
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = res.data;

      document.cookie = `token=${token}; path=/; max-age=86400`;

      console.log("Login correcto");

      router.push("/");

    } catch (err: any) {
      setError("Error en el login");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="auth-form">
    <h2 className="auth-title">Login</h2>

    <input
      className="auth-input"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      className="auth-input"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button 
      className="auth-button"
      onClick={handleLogin} 
      disabled={loading}
    >
      {loading ? "Cargando..." : "Entrar"}
    </button>

    {error && <p className="auth-error">{error}</p>}
  </div>
);
};