import { useEffect, useState } from "react";
import "./assets/styles/app.sass";
import Router from "./router/router";
import Footer from "./shared/components/Footer/Footer";
import Header from "./shared/components/Header/Header";
import DesktopNavigation from "./shared/components/Navigation/DesktopNavigation";
import ModalComponent from "./shared/components/ModalComponent/ModalComponent";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Header />
      <DesktopNavigation />
      <Router />
      <Footer />
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
}

export default App;
