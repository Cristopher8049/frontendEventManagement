import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./RegisterPage.module.css"; // Import CSS module

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const RegisterPage = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Entrada no válida");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sin respuesta del servidor");
      } else if (err.response?.status === 409) {
        setErrMsg("Nombre de usuario ya en uso");
      } else {
        setErrMsg("Registro fallido");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className={`${styles.section} section`}>
          <h1>¡Éxito!</h1>
          <p>
            <a href="#">Iniciar sesión</a>
          </p>
        </section>
      ) : (
        <section className={`${styles.section} section`}>
          <p
            ref={errRef}
            className={errMsg ? `${styles.errmsg} errmsg` : styles.offscreen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="section__title">Registrarse</h1>
          <form onSubmit={handleSubmit} className={`${styles.form} form`}>
            <label htmlFor="username" className="form__label">
              Nombre de usuario:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validName ? `${styles.valid} form__icon--valid` : styles.hide
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validName || !user
                    ? styles.hide
                    : `${styles.invalid} form__icon--invalid`
                }
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className={`${styles.input} form__input`}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? `${styles.instructions} form__instructions`
                  : styles.offscreen
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 a 24 caracteres.
              <br />
              Debe comenzar con una letra.
              <br />
              Se permiten letras, números, guiones bajos y guiones.
            </p>

            <label htmlFor="password" className="form__label">
              Contraseña:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validPwd ? `${styles.valid} form__icon--valid` : styles.hide
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validPwd || !pwd
                    ? styles.hide
                    : `${styles.invalid} form__icon--invalid`
                }
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className={`${styles.input} form__input`}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd
                  ? `${styles.instructions} form__instructions`
                  : styles.offscreen
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 a 24 caracteres.
              <br />
              Debe incluir letras mayúsculas y minúsculas, un número y un
              carácter especial.
              <br />
              Caracteres especiales permitidos:{" "}
              <span aria-label="signo de exclamación">!</span>{" "}
              <span aria-label="símbolo de arroba">@</span>{" "}
              <span aria-label="almohadilla">#</span>{" "}
              <span aria-label="signo de dólar">$</span>{" "}
              <span aria-label="porcentaje">%</span>
            </p>

            <label htmlFor="confirm_pwd" className="form__label">
              Confirmar Contraseña:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validMatch && matchPwd
                    ? `${styles.valid} form__icon--valid`
                    : styles.hide
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatch || !matchPwd
                    ? styles.hide
                    : `${styles.invalid} form__icon--invalid`
                }
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className={`${styles.input} form__input`}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch
                  ? `${styles.instructions} form__instructions`
                  : styles.offscreen
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Confirmación de contraseña.
            </p>

            <button
              type="submit"
              disabled={!validName || !validPwd || !validMatch}
              className="form__button"
            >
              Registrarse
            </button>
          </form>
          <p className="section__text">
            Ya estás registrado?
            <br />
            <span className="line">
              <a href="/login" className="line__link">
                Iniciar Sesión
              </a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default RegisterPage;
