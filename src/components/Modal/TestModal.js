import React from "react";
import { useDispatch } from 'react-redux';

import Modal from "./Modal";

const TestModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
		dispatch({
			type: 'MODAL_CLOSE'
		})
	}

  return (
    <Modal>
      <h1>Modal One Working!</h1>
      <p>Click button to exit modal!</p>
      <button onClick={() => closeModal()}>Close Modal</button>
    </Modal>
  )
}

export default TestModal;
