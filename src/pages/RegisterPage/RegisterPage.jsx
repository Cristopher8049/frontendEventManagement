import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RegisterPage.css"; // Import CSS directly

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
        <section className="section">
          <h1>¡Éxito!</h1>
          <p>
            <a href="#">Iniciar sesión</a>
          </p>
        </section>
      ) : (
        <section className="section">
          <p
            ref={errRef}
            className={errMsg ? "errmsg error-message" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="section-title">Registrarse</h1>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="username" className="form-label">
              Nombre de usuario:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "form-icon-valid" : "offscreen"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validName || !user ? "offscreen" : "form-icon-invalid"
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
              className="form-input"
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? "form-instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 a 24 caracteres.
              <br />
              Debe comenzar con una letra.
              <br />
              Se permiten letras, números, guiones bajos y guiones.
            </p>

            <label htmlFor="password" className="form-label">
              Contraseña:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "form-icon-valid" : "offscreen"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "offscreen" : "form-icon-invalid"}
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
              className="form-input"
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? "form-instructions" : "offscreen"
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

            <label htmlFor="confirm_pwd" className="form-label">
              Confirmar Contraseña:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validMatch && matchPwd ? "form-icon-valid" : "offscreen"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatch || !matchPwd ? "offscreen" : "form-icon-invalid"
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
              className="form-input"
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "form-instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Confirmación de contraseña.
            </p>

            <button
              type="submit"
              disabled={!validName || !validPwd || !validMatch}
              className="form-button"
            >
              Registrarse
            </button>
          </form>
          <p>
            Ya estás registrado?
            <br />
            <span className="line">
              <a href="/login" className="line-link">
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
