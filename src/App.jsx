import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";

// author: { avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/49956758?v=4",
      name: "Yan",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    hashtags: ["#novoprojeto", "#nlw", "#rocketseat"],
    publishedAt: new Date("2022-08-03 11:11:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((props) => (
            <Post
              key={props.id}
              author={props.author}
              content={props.content}
              hashtags={props.hashtags}
              publishedAt={props.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
