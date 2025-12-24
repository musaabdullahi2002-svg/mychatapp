function Signup({ setPage }) {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Create Account</button>

      <p>
        Already have an account?{" "}
        <span onClick={() => setPage("login")}>Login</span>
      </p>
    </div>
  );
}
export default Signup;