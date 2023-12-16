import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";


function App() {
  return (
    <div className="App">
      <header id="header" class="header fixed-top d-flex align-items-center">
          <Header />
      </header>
      <main id="main" class="main">
          <Main />
      </main>
      <footer id="footer" class="footer">
          <Footer />
      </footer>
    </div>
  );
}

export default App;
