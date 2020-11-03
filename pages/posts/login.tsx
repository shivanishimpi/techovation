import Head from "next/head";
import Link from "next/link";
import { stringify } from "querystring";
import { useState } from "react";
// import styles from "../../styles/Pages.module.css";
import jwt from "jsonwebtoken";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("You are not logged in");
  const [secretmessage, setSecret] = useState<string>("");

  async function submitForm() {
    const res = await fetch("../api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log(json);
      setMessage(
        `Hey ${json.username} and you are ${
          json.admin ? "an admin" : "not an admin"
        }`
      );
      const res = await fetch("../api/secret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }).then((t) => t.json());
      if (res.secretAdminCode) {
        // setSecret(res.secretAdminCode)
        setSecret(`Hey ${json.username} You're awesome`);
      } else {
        setSecret("Only Sunshine can access");
      }
    } else {
      setMessage("Something went wrong");
    }
  }
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("../../public/bg.jpg")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <Head>
        <title>Techovation/Login</title>
        <link rel="icon" href="/future.svg" />
      </Head>
      <main className="main">
        <div className="card">
          <h1 className="title">{message}</h1>
          <p className="description">{secretmessage}</p>
          <form className="form" method="POST" action="../api/login">
            <input
              className="button"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              className="button"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              className="button"
              type="button"
              onClick={submitForm}
              value="Login"
            />
          </form>
        </div>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background-image: url(../../public/bg.jpg);
          background-attachment: fixed;
          background-color: rgba(0, 0, 0, 0.397);
          background-size: cover;
          background-position: center;
          background-image:url('/public/bg.jpg');
            (#494945,
            #75726f);
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          /* position: relative; */
        }

        .button {
          background: #61817d3d;
          border-radius: 5px;
          padding: 0.25rem;
          margin-bottom: 0.5rem;
          /* margin-left: 6rem; */
          justify-content: center;
          font-size: 1.1rem;
          border-color: #53586b;
          color: #000000;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .form {
          justify-content: center;
          align-items: center;
          padding: 5rem 5rem 5rem 5rem;
        }

        .card {
          background-color: #b2c1f163;
          margin: 5rem 5rem 5rem 5rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: beige;
          text-decoration: none;
          border: 1px solid #8392c5;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          align-items: center;
        }

        .card h1 {
          margin: 3rem 1rem 4rem 2rem; /*top right bottom left*/
          font-size: 2.5rem;
          text-decoration: underline;
          color: #231f38be;
        }
        .card p {
          margin: 0 2rem 3rem 2rem;
          font-size: 1rem;
          line-height: 1.5;
          color: black;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          background: #38454f;
          width: 100%;
          height: 100px;
          border-top: 1px solid #38545f;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer img {
          margin-left: 0.5rem;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo {
          height: 1em;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: #8392c5;
          /* color: #7986ad; */
        }
      `}</style>
    </div>
  );
}
