import { useRef, useState, useEffect } from "react";
import "./LoginPage.css"; // Importar CSS module

const LoginPage = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular un proceso de inicio de sesión exitoso
    if (user === "testuser" && pwd === "password") {
      setSuccess(true);
    } else {
      setErrMsg("Inicio de sesión fallido");
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
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
            <label htmlFor="username" className="form__label">
              Nombre de usuario:
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className={"form-input"}
            />

            <label htmlFor="password" className="form__label">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
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
