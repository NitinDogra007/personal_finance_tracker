import React from "react";
import FormComponent from "./FormComponent";
import "../styles/modal.css";

function ModalComponent({ closeModal, addData }) {
  return (
    <div className="modal-container">
      <FormComponent closeModal={closeModal} addData={addData} />
    </div>
  );
}

export default ModalComponent;
