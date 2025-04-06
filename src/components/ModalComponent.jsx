import React from "react";
import "../styles/modal.css";

function ModalComponent({ closeModal }) {
  return (
    <div className="modal-container">
      <form>
        <button
          type="button"
          className="close-btn"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <label htmlFor="name">Transaction Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name of Transaction"
          aria-label="Transaction Name"
          required
        />
        <label htmlFor="transaction-type">Transaction Type:</label>
        <select id="transaction-type" aria-label="Transaction Type" required>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <label htmlFor="category">Select Category:</label>
        <select id="category" aria-label="Category" required>
          <option disabled selected value>
            -- select an option --
          </option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="home">Home</option>
          <option value="job">Job</option>
        </select>
        <label htmlFor="date">Select Date:</label>
        <input type="date" required />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ModalComponent;
