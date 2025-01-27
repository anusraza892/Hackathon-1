// import sign from "next/components"


// export default function Signup() {
//     return (
      // Import required modules from React
import React from 'react';

// Next.js functional component for the login page
const LoginPage = () => {
  return (
    <div className="container">
      <div className="login-box">
        <h1>Sign In</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email or mobile number</label>
            <input type="text" id="email" placeholder="Enter your email or mobile number" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button className="btn" id="loginButton" type="submit">Sign In</button>
          <div className="links">
            <a href="/logout">Forgot password?</a> | <a href="/signup">Sign up now</a>
          </div>
        </form>
      </div>

      <style jsx>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1E90FF, #4682B4);
          margin: 0;
          color: #fff;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #121212, #1E90FF);
        }
        .login-box {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          width: 350px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          color: #333;
        }
        .login-box h1 {
          font-size: 30px;
          margin-bottom: 20px;
          color: #1E90FF;
        }
        .input-group {
          margin-bottom: 18px;
          text-align: left;
        }
        .input-group label {
          display: block;
          margin-bottom: 8px;
          color: #1E90FF;
          font-weight: bold;
        }
        .input-group input {
          width: 100%;
          padding: 12px;
          background: #f9f9f9;
          border: 2px solid #f2f2f2;
          border-radius: 8px;
          color: #333;
          font-size: 16px;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }
        .input-group input:focus {
          border-color: #1E90FF;
          outline: none;
        }
        .btn {
          background: #1E90FF;
          border: none;
          padding: 12px;
          width: 100%;
          color: #fff;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: #4682B4;
        }
        .links {
          margin-top: 20px;
          font-size: 14px;
        }
        .links a {
          color: #1E90FF;
          text-decoration: none;
          font-weight: bold;
        }
        .links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;

        
//         );
// }
