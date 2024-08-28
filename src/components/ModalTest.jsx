import React, { useState } from "react";
import Modal from "./Modal/Modal";
import AGZU from "./AGZU/AGZU";
import Grid from "./Grid/Grid";
import AgzuDiagram from "./AgzuDiagram/AgzuDiagram";
import ABCChart from "./ABCChart/ABCChart";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      <Modal isOpen={showModal} onClose={toggleModal}>
        {/* <ABCChart /> */}
        {/* <AgzuDiagram/> */}
        <Grid />
      </Modal>
    </div>
  );
};

export default ModalTest;
