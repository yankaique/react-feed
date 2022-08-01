import styles from "./post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/49956758?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Yan Marinho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="1 de Agosto as 08:13" dateTime="2022-08-01 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉<a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
