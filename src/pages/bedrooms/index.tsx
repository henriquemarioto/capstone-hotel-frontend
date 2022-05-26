import BedroomsCard from "../../components/BedroomsCard";
import { BedroomsDiv, MainDiv, SearchSection, TitleSection } from "./styles";

import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBedroom } from "../../providers/Bedroom";
import { useLogin } from "../../providers/Login";

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
    const {bedrooms, getAllBedrooms} = useBedroom()
    const {token} = useLogin()

    useEffect(() => {
      getAllBedrooms(token)
    },[])

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
              key={index}
              bedroom={bedroom}
            />
          );
        })}
      </BedroomsDiv>
    </MainDiv>
  );
};

export default BedroomsPage;
