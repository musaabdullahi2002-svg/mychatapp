import '../styles/Welcome.css'

function Welcome({ setPage }) {
  return (
    <div className="welcome-container">
      <h1>ChatApp 💬</h1>
      <p>Connect with friends instantly and securely</p>

      <div className="welcome-buttons">
        <button onClick={() => setPage("login")}>Login</button>
        <button className="outline" onClick={() => setPage("signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default Welcome;