import React, { useRef } from "react";

const SignUp = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = () => {
    nameRef.current.focus();
    emailRef.current.style.backgroundColor = "yellow";
    passwordRef.current.style.backgroundColor = "yellowgreen";
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <input type="text" ref={nameRef} placeholder="Enter Your Username" />
        </div>
        <div className="form-group">
          <input type="email" ref={emailRef} placeholder="Enter Your Email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter Your Password"
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-success btn-info"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
