import BedroomsCard from "../../components/BedroomsCard";
import { BedroomsDiv } from "./styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useBedroom } from "../../providers/Bedroom";
import { useLogin } from "../../providers/Login";
import Margin from "../../components/Margin";
import SearchModel from "../../components/SearchModel";

interface Bedroom {
  availability: boolean;
  capacity: number;
  clientsList: object[];
  floor: string;
  number: string;
}

const BedroomsPage = () => {
  const { getAllBedrooms, bedrooms, filteredBedrooms, filter } = useBedroom()
  const { token } = useLogin()

  const history = useHistory()

  useEffect(() => {
    getAllBedrooms(token);
  }, []);

  return (
    <Margin>
      <SearchModel
        title="Bedroom"
        placeholder="Number, floor, capacity"
        searchFunction={filter}
      >
        <BedroomsDiv>
          {filteredBedrooms.length > 0
            ? filteredBedrooms.map((bedroom) => {
                return <BedroomsCard key={bedroom.id} bedroom={bedroom} />;
              })
            : bedrooms.map((bedroom) => {
                return <BedroomsCard key={bedroom.id} bedroom={bedroom} />;
              })}
        </BedroomsDiv>
      </SearchModel>
    </Margin>
  );
};

export default BedroomsPage;