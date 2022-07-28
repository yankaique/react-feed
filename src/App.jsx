import { Header } from "./components/Header";
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Yan"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum ut dignissimos, doloremque eos aliquam expedita? Pariatur accusamus fugit quaerat voluptatibus reprehenderit, deleniti tenetur magni nobis nulla atque rerum dignissimos!"
      />
      <Post
        author="Robinson"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum ut dignissimos, doloremque eos aliquam expedita? Pariatur accusamus fugit quaerat voluptatibus reprehenderit, deleniti tenetur magni nobis nulla atque rerum dignissimos!"
      />
    </div>
  );
}

export default App;
