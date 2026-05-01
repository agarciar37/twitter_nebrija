import api from "@/api/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Register = () => {

  const router = useRouter()
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/register", {
        username,
        email,
        password,
      });

      const { token } = res.data;

      document.cookie = `token=${token}; path=/; max-age=86400`;

      console.log("Usuario registrado");

      router.push("/");

    } catch (err: any) {
      setError("Error en el registro");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="auth-form">
    <h2 className="auth-title">Register</h2>

    <input
      className="auth-input"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

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
      onClick={handleRegister} 
      disabled={loading}
    >
      {loading ? "Cargando..." : "Registrarse"}
    </button>

    {error && <p className="auth-error">{error}</p>}
  </div>
);
};