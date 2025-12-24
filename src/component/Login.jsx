function Login({ setPage }) {
  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <p>
        Don’t have an account?{" "}
        <span onClick={() => setPage("signup")}>Sign Up</span>
      </p>
    </div>
  );
}

export default Login;