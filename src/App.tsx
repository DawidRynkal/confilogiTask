import "./assets/styles/app.sass";
import Router from "./router/router";
import Footer from "./shared/components/Footer";
import Header from "./shared/components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
