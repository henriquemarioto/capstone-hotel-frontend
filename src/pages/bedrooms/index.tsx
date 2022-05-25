import BedroomsCard from "../../components/BedroomsCard";
import { BedroomsDiv, MainDiv, SearchSection, TitleSection } from "./styles";

import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import PopupRegisterClient from "../../components/PopupRegisterClient";
import { useState } from "react";
import PopupRegisterService from "../../components/PopupRegisterService";
import PopupRegisterBedroom from "../../components/PopupRegisterBedroom";
import PopupRegisterContract from "../../components/PopupRegisterContract";

interface Bedroom {
  availability: boolean;
  capacity: number;
  clientsList: object[];
  floor: string;
  number: string;
}

interface Bedrooms {
  bedrooms: Bedroom[];
}

const BedroomsPage = () => {
  const bedrooms = [
    {
      availability: true,
      capacity: 3,
      clientsList: [{}, {}, {}],
      floor: "2",
      number: "200",
    },
    {
      availability: false,
      capacity: 4,
      clientsList: [{}, {}],
      floor: "3",
      number: "300",
    },
    {
      availability: true,
      capacity: 5,
      clientsList: [],
      floor: "1",
      number: "500",
    },
  ];

  // const [showPopup, setShowPopup] = useState<boolean>(false);

  // const handlePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  return (
    <MainDiv>
      {/* <button onClick={handlePopup}></button>
      {showPopup && <PopupRegisterContract handlePopup={handlePopup} />} */}

      <TitleSection>
        <button>
          <FaArrowLeft />
        </button>
        <h1>Bedrooms</h1>
      </TitleSection>
      <SearchSection>
        <p>Choose the bedroom</p>
        <form>
          <input type="text" placeholder="Number, floor, availability" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </SearchSection>
      <BedroomsDiv>
        {bedrooms.map((bedroom, index) => {
          return (
            <BedroomsCard
              availability={bedroom.availability}
              capacity={bedroom.capacity}
              clientsList={bedroom.clientsList}
              floor={bedroom.floor}
              number={bedroom.number}
              key={index}
            />
          );
        })}
      </BedroomsDiv>
    </MainDiv>
  );
};

export default BedroomsPage;
