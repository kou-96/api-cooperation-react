import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(username, email, password) {
    const url = "http://localhost:5002/api/login";
    const data = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(
          "ユーザー名またはメールアドレスまたはパスワードが間違っています。"
        );
      }
      const resData = await res.text();
      alert(resData);
      navigate("/add");
    } catch (error) {
      alert("ログイン失敗");
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="form-box login">
          <h1>ログイン</h1>
          <div className="input-box">
            <input
              type="text"
              value={username}
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <IoMail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <button
            type="submit"
            onClick={() => login(username, email, password)}
          >
            ログイン
          </button>

          <div className="register-link">
            <p>
              アカウントをお持ちでない場合は <Link to="/signup">新規登録</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
