import {Main,Container, DivSession} from "./style";
import { useState } from "react";
import {
  FaBed,
  FaClipboard,
  FaReceipt,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa";
import image from '../../img/background.png'
import Margin from "../../components/Margin";
import PopupRegisterClient from "../../components/PopupRegisterClient";
import PopupRegisterContract from "../../components/PopupRegisterContract";
import PopupRegisterBedroom from "../../components/PopupRegisterBedroom";
import PopupRegisterService from "../../components/PopupRegisterService";
const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(true);
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
        <DivSession>
          <button onClick={handleClients}>
            <FaUserTie />
          </button>
          <span>New Client</span>
        </DivSession>
        <DivSession>
          <button onClick={handleContract}>
            <FaClipboard />
          </button>
          <span>New Contract</span>
        </DivSession>
        <DivSession>
          <button onClick={handleBedroom}>
            <FaBed />
          </button>
          <span>New Bedroom</span>
        </DivSession>
        <DivSession>
          <button onClick={handleService}>
            <FaReceipt />
          </button>
          <span>New Service</span>
        </DivSession>
        <DivSession>
          <button onClick={handleEmployee}>
            <FaUserFriends />
          </button>
          <span>New Employee</span>
        </DivSession>
      </Container>
      </Main>
      {/* {showModalClients && <PopupRegisterClient handlePopup={handleClients} />}
      {showModalContract && (
        <PopupRegisterContract handlePopup={handleContract} />
      )} */}
      {showModalBedroom && <PopupRegisterBedroom handlePopup={handleBedroom} />}
      {showModalService && <PopupRegisterService handlePopup={handleService} />}
      {/* {showModalEmployee && <h1>teste</h1>} */}
    </Margin>
  );
};

export default Dashboard;
