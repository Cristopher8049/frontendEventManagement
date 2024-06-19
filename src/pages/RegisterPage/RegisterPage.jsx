import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/Navbar/Navbar";
import "./RegisterPage.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const RegisterPage = () => {
  const nombreRef = useRef();
  const errRef = useRef();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [dob, setDob] = useState("");
  const [direccion, setDireccion] = useState("");
  const [organizacion, setOrganizacion] = useState("");
  const [profesion, setProfesion] = useState("");
  const [cargo, setCargo] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nombreRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [nombre, apellido, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Entrada no válida");
      return;
    }
  };

  return (
    <>
      <Navbar />
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
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              ref={nombreRef}
              autoComplete="off"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              required
              className="form-input"
            />

            <label htmlFor="apellido" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              autoComplete="off"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
              required
              className="form-input"
            />

            <label htmlFor="email" className="form-label">
              Correo Electrónico:
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "form-icon-valid" : "offscreen"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validEmail || !email ? "offscreen" : "form-icon-invalid"
                }
              />
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              className="form-input"
            />
            <p
              id="emailnote"
              className={
                emailFocus && email && !validEmail
                  ? "form-instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Formato de correo no válido.
            </p>

            <label htmlFor="dob" className="form-label">
              Fecha de Nacimiento:
            </label>
            <input
              type="date"
              id="dob"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
              required
              className="form-input"
            />

            <label htmlFor="direccion" className="form-label">
              Dirección:
            </label>
            <input
              type="text"
              id="direccion"
              onChange={(e) => setDireccion(e.target.value)}
              value={direccion}
              required
              className="form-input"
            />

            <label htmlFor="organizacion" className="form-label">
              Organización:
            </label>
            <input
              type="text"
              id="organizacion"
              onChange={(e) => setOrganizacion(e.target.value)}
              value={organizacion}
              required
              className="form-input"
            />

            <label htmlFor="profesion" className="form-label">
              Profesión:
            </label>
            <input
              type="text"
              id="profesion"
              onChange={(e) => setProfesion(e.target.value)}
              value={profesion}
              required
              className="form-input"
            />

            <label htmlFor="cargo" className="form-label">
              Cargo:
            </label>
            <input
              type="text"
              id="cargo"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
              required
              className="form-input"
            />

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
              disabled={!validEmail || !validPwd || !validMatch}
              className="form-button"
            >
              Registrarse
            </button>
          </form>
          <p>
            ¿Ya estás registrado?
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
