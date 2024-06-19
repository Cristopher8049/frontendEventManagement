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
const REGISTER_URL = "http://localhost:8000/auth/register";

const RegisterPage = () => {
  const firstNameRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, email, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Entrada no válida");
      return;
    }

    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          birthDate,
          address,
          organization,
          position,
        }),
      });

      if (!response.ok) {
        throw new Error("Fallo al registrarse");
      }

      const data = await response.json();
      console.log(data);

      setSuccess(true);
      // Optionally, you can reset the form fields here
      setFirstName("");
      setLastName("");
      setEmail("");
      setBirthDate("");
      setAddress("");
      setOrganization("");
      setPosition("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setErrMsg(err.message || "Fallo en la solicitud de registro");
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
            <label htmlFor="firstName" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              id="firstName"
              ref={firstNameRef}
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
              className="form-input"
            />

            <label htmlFor="lastName" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              id="lastName"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
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

            <label htmlFor="birthDate" className="form-label">
              Fecha de Nacimiento:
            </label>
            <input
              type="date"
              id="birthDate"
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate}
              required
              className="form-input"
            />

            <label htmlFor="address" className="form-label">
              Dirección:
            </label>
            <input
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
              className="form-input"
            />

            <label htmlFor="organization" className="form-label">
              Organización:
            </label>
            <input
              type="text"
              id="organization"
              onChange={(e) => setOrganization(e.target.value)}
              value={organization}
              required
              className="form-input"
            />

            <label htmlFor="position" className="form-label">
              Cargo:
            </label>
            <input
              type="text"
              id="position"
              onChange={(e) => setPosition(e.target.value)}
              value={position}
              required
              className="form-input"
            />

            <label htmlFor="password" className="form-label">
              Contraseña:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "form-icon-valid" : "offscreen"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validPassword || !password ? "offscreen" : "form-icon-invalid"
                }
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              className="form-input"
            />
            <p
              id="pwdnote"
              className={
                passwordFocus && !validPassword
                  ? "form-instructions"
                  : "offscreen"
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

            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validMatch && confirmPassword
                    ? "form-icon-valid"
                    : "offscreen"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatch || !confirmPassword
                    ? "offscreen"
                    : "form-icon-invalid"
                }
              />
            </label>
            <input
              type="password"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
              className="form-input"
            />
            <p
              id="confirmnote"
              className={
                confirmPasswordFocus && !validMatch
                  ? "form-instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Confirmación de contraseña.
            </p>

            <button
              type="submit"
              disabled={!validEmail || !validPassword || !validMatch}
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
