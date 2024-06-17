import { useRef, useState, useEffect } from "react";
import styles from "./LoginPage.module.css"; // Importar CSS module

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
        <section className={styles.section}>
          <h1>¡Has iniciado sesión!</h1>
          <br />
          <p>
            <a href="#">Ir a la página principal</a>
          </p>
        </section>
      ) : (
        <section className={styles.section}>
          <p
            ref={errRef}
            className={errMsg ? styles.errmsg : styles.offscreen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Iniciar sesión</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className={styles.input}
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              className={styles.input}
            />
            <button className={styles.button}>Iniciar sesión</button>
          </form>
          <p>
            ¿Necesitas una cuenta?
            <br />
            <span className={styles.line}>
              <a href="/SignUp">Registrarse</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default LoginPage;
