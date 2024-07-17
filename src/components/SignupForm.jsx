import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useState } from "react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signup(username, email, password) {
    const url = "http://localhost:5002/api/signup";
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
        throw new Error("アカウント作成に失敗しました");
      }
      const resData = await res.text();
      alert(resData);
      navigate("/signupsuccess");
    } catch (error) {
      console.error("作成エラー:", error);
      alert("ユーザー名またはメールアドレスが既に使用されています。");
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="form-box login">
          <h1>新規登録</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <IoMail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <button onClick={() => signup(username, email, password)}>
            登録
          </button>
          <div className="register-link">
            <p>
              アカウントをお持ちの場合は <Link to="/">ログイン</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
