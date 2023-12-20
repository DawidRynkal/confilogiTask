import Modal from "react-modal";
import Ilustration2 from "../../../assets/images/illustration-features-tab-2.svg";
import CustomButton, { ButtonTypes } from "../buttons/CustomButton";

const ModalComponent = ({ isOpen, closeModal }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Przykładowy Modal"
      className="modal"
      overlayClassName="modal__overlay"
    >
      <div className="modal__content">
        <div className="modal__text">
          <h1>Speedy Searching</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <img src={Ilustration2} alt="" />
        </div>
        <CustomButton
          handleClick={closeModal}
          text="Zamknij"
          type={ButtonTypes.BORDER}
        />
      </div>
    </Modal>
  );
};

export default ModalComponent;
