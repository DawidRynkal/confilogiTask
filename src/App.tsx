import "./assets/styles/app.sass";
import Router from "./router/router";
import Footer from "./shared/components/Footer/Footer";
import Header from "./shared/components/Header/Header";
import DesktopNavigation from "./shared/components/Navigation/DesktopNavigation";

function App() {
  return (
    <>
      <Header />
      <DesktopNavigation />
      <Router />
      <Footer />
    </>
  );
}

export default App;
