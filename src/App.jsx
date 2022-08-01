import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Yan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum ut dignissimos, doloremque eos aliquam expedita? Pariatur accusamus fugit quaerat voluptatibus reprehenderit, deleniti tenetur magni nobis nulla atque rerum dignissimos!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
