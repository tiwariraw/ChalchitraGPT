import { useState } from "react";
import Header from "./Header";
import { validateEmail, validatePassword } from "../utils/validate";
import { auth } from "../utils/firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatedEmailValue, setValidatedEmailValue] = useState(null);
  const [validatedPasswordValue, setValidatedPasswordValue] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const handleBtnClick = async () => {
    // validate the form data
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    setValidatedEmailValue(isValidEmail);
    setValidatedPasswordValue(isValidPassword);

    // if isValidEmail or isValidPassword is not null i.e. they create the error string, then return
    if (isValidEmail || isValidPassword) return;

    // sign in / sign up
    if (!isSignInForm) {
      // sign up logic
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      } catch (err) {
        setErrorMsg(`${err.code} ${err.message}`);
      }
    } else {
      // sign in logic
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      } catch (err) {
        setErrorMsg(`${err.code}, ${err.message}`);
      }
    }
  };

  return (
    <div className="login">
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
          className="opacity-90"
        />
      </div>

      <form
        action="#"
        method="GET"
        className="relative top-28 px-1 py-6 bg-black/80 text-white w-3/12 mx-auto rounded-lg flex flex-col flex-wrap gap-4 justify-center items-center"
        onSubmit={(e) => e.preventDefault()} // prevent the default submission of form
      >
        <h2 className="text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {/* show the below input name field only when the user is on sign up page */}
        {!isSignInForm && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="m-2 px-4 py-2 w-72 rounded-md focus:border-b-2 border-orange-600 outline-none bg-gray-600"
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="m-2 px-4 py-2 w-72 rounded-md focus:border-b-2 border-orange-600 outline-none bg-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* validatedEmailValue will be displayed only when the email is invalid, otherwise the "validatedEmailValue" will contain null which will not displayed on UI */}
        <p className="text-orange-600 -mt-4 text-xs w-64 text-center">
          {validatedEmailValue}
        </p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="px-4 py-2 w-72 rounded-md focus:border-b-2 border-orange-600 outline-none bg-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* validatedPasswordValue will be displayed only when the password is invalid, otherwise the "validatedPasswordValue" will contain null which will not displayed on UI */}
        <p className="text-orange-600 -mt-2 text-xs text-center w-64">
          {validatedPasswordValue}
        </p>

        {/* error message if user is not able to sign up or sign in */}
        <p className="text-orange-600 -mt-2 text-xs text-center w-64">
          {errorMsg}
        </p>

        <button
          onClick={handleBtnClick}
          className="w-72 px-4 py-1.5 mt-4 bg-red-600 text-white rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p className="text-gray-400 mt-6">
            New to ChalchitraGPT?{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-gray-400 mt-6 mb-2">
            Already Registered?{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In now.
            </span>
          </p>
        )}

        <p className="px-8 py-2 text-gray-400 w-96">
          Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
        </p>

        <p className="px-8 py-2 text-gray-400 w-96">
          The information collected by Google reCAPTCHA is subject to the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          , and is used for providing, maintaining, and improving the reCAPTCHA
          service and for general security purposes (it is not used for
          personalised advertising by Google).
        </p>
      </form>
    </div>
  );
};

export default Login;
