import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-300">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
