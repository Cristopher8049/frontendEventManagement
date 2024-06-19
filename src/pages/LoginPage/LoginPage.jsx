import { useRef, useState, useEffect } from "react";
import "./LoginPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/authContext";

const LoginPage = () => {
  const { login, user } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
    } catch (error) {
      setErrMsg(error.message || 'Login failed');
    }

    errRef.current.focus();
  };

  return (
    <>
      <Navbar />
      {user ? (
        <section className={"section"}>
          <h1 className="section__title">¡Has iniciado sesión!</h1>
          <br />
          <p>
            <a href="#" className="section__link">
              Ir a la página principal
            </a>
          </p>
        </section>
      ) : (
        <section className={"section"}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg error-message" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="section__title">Iniciar sesión</h1>
          <form onSubmit={handleSubmit} className={"form"}>
            <label htmlFor="email" className="form__label">
              Correo Electrónico:
            </label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className={"form-input"}
            />

            <label htmlFor="password" className="form__label">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={"form-input"}
            />
            <button className={"form-button"}>Iniciar sesión</button>
          </form>
          <p>
            ¿Necesitas una cuenta?
            <br />
            <span className={"line"}>
              <a href="/SignUp" className="line__link">
                Registrarse
              </a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default LoginPage;
