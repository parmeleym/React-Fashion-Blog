import Article from "./Components/Article";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Article img={1} imgAlt={'image-one.jpg'}/>
      <Article img={2} imgAlt={'image-two.jpg'}/>
      <Footer />
    </div>
  );
}

export default App;
