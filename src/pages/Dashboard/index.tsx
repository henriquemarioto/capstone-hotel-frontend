import {
  Menu,
  Container,
  ContainerContent,
  Image,
  ContainerItem,
  ContainerPlus,
} from "./style";

import background from "./img/background.png";
import { useState } from "react";
import {
  FaBed,
  FaClipboard,
  FaPlus,
  FaReceipt,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa";
import Margin from "../../components/Margin";
const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <Margin>
      <Container>
        <Menu>
          <Image className="background" src={background} alt="" />

          <ContainerContent>
            <ContainerItem>
              <ContainerPlus>
                <FaPlus size={15} />
              </ContainerPlus>
              <span>New client</span>
              <FaUserFriends size={20} />
            </ContainerItem>

            <ContainerItem>
              <ContainerPlus>
                <FaPlus size={15} />
              </ContainerPlus>
              <span>New contract</span>
              <FaClipboard size={20} />
            </ContainerItem>

            {isAdmin && (
              <>
                <ContainerItem>
                  <ContainerPlus>
                    <FaPlus size={15} />
                  </ContainerPlus>
                  <span>New bedroom</span>
                  <FaBed size={20} />
                </ContainerItem>

                <ContainerItem>
                  <ContainerPlus>
                    <FaPlus size={15} />
                  </ContainerPlus>
                  <span>New service</span>
                  <FaReceipt size={20} />
                </ContainerItem>

                <ContainerItem>
                  <ContainerPlus>
                    <FaPlus size={15} />
                  </ContainerPlus>
                  <span>New employee</span>
                  <FaUserTie size={20} />
                </ContainerItem>
              </>
            )}
          </ContainerContent>
        </Menu>
      </Container>
    </Margin>
  );
};

export default Dashboard;
