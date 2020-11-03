import Head from "next/head";
import Link from "next/link";
import { stringify } from "querystring";
import { useState } from "react";
import styles from "../../styles/Pages.module.css";
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
    <div className={styles.container}>
      <Head>
        <title>Techovation/Login</title>
        <link rel="icon" href="/future.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>{message}</h1>
          <p className={styles.description}>{secretmessage}</p>
          <form className={styles.form} method="POST" action="../api/login">
            <input
              className={styles.button}
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              className={styles.button}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              className={styles.button}
              type="button"
              onClick={submitForm}
              value="Login"
            />
          </form>
        </div>
      </main>
    </div>
  );
}
