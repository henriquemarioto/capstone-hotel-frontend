import { Main, Container, DivSession } from "./style";
import { useState } from "react";
import {
  FaBed,
  FaClipboard,
  FaReceipt,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa";
import image from "../../img/background.png";
import Margin from "../../components/Margin";
import PopupRegisterClient from "../../components/Popups/PopupRegisterClient";
import PopupRegisterContract from "../../components/Popups/PopupRegisterContract";
import PopupRegisterBedroom from "../../components/Popups/PopupRegisterBedroom";
import PopupRegisterService from "../../components/Popups/PopupRegisterService";
import PopupRegisterEmployee from "../../components/Popups/PopupRegisterEmployee";

const Dashboard = () => {
  const [showModalClients, setShowModalClients] = useState<boolean>(false);
  const [showModalContract, setShowModalContract] = useState<boolean>(false);
  const [showModalBedroom, setShowModalBedroom] = useState<boolean>(false);
  const [showModalService, setShowModalService] = useState<boolean>(false);
  const [showModalEmployee, setShowModalEmployee] = useState<boolean>(false);

  const handleClients = () => {
    setShowModalClients(!showModalClients);
  };
  const handleContract = () => {
    setShowModalContract(!showModalContract);
  };
  const handleBedroom = () => {
    setShowModalBedroom(!showModalBedroom);
  };
  const handleService = () => {
    setShowModalService(!showModalService);
  };
  const handleEmployee = () => {
    setShowModalEmployee(!showModalEmployee);
  };

  return (
    <Margin>
      <Main>
        <img src={image} alt="" />
        <Container>
          <DivSession onClick={handleClients}>
            <p>
              <FaUserTie />
            </p>
            <span>New Client</span>
          </DivSession>
          <DivSession onClick={handleContract}>
            <p>
              <FaClipboard />
            </p>
            <span>New Contract</span>
          </DivSession>
          <DivSession onClick={handleBedroom}>
            <p>
              <FaBed />
            </p>
            <span>New Bedroom</span>
          </DivSession>
          <DivSession onClick={handleService}>
            <p>
              <FaReceipt />
            </p>
            <span>New Service</span>
          </DivSession>
          <DivSession onClick={handleEmployee}>
            <p>
              <FaUserFriends />
            </p>
            <span>New Employee</span>
          </DivSession>
        </Container>
      </Main>
      {showModalClients && <PopupRegisterClient handlePopup={handleClients} />}
      {showModalContract && (
        <PopupRegisterContract handlePopup={handleContract} />
      )}
      {showModalBedroom && <PopupRegisterBedroom handlePopup={handleBedroom} />}
      {showModalService && <PopupRegisterService handlePopup={handleService} />}
      {showModalEmployee && <PopupRegisterEmployee handlePopup={handleEmployee}/>}
    </Margin>
  );
};

export default Dashboard;
