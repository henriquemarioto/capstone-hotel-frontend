import BedroomsCard from "../../components/BedroomsCard";
import { BedroomsDiv, MainDiv, SearchSection, TitleSection } from "./styles";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Button from "../../components/Button";
import { useBedroom } from "../../providers/Bedroom";
import { useLogin } from "../../providers/Login";
import Margin from "../../components/Margin";
import { Input } from "../../components/Input";
import SearchModel from "../../components/SearchModel";

interface Bedroom {
  availability: boolean;
  capacity: number;
  clientsList: object[];
  floor: string;
  number: string;
}

const BedroomsPage = () => {
  const { getAllBedrooms, bedrooms } = useBedroom();
  const { token } = useLogin();

  // const [search, setSearch] = useState("")
  // const [bedrooms, setBedrooms] = useState(bedroomsList)
  // const history = useHistory()

  // const goBack = () => {
  //   return history.push("/")
  // }

  // const filter = (event: any, search: string) => {
  //   event.preventDefault()
  //   const bedrooms = [...bedroomsList]
  //   const filteredBedrooms = bedrooms.filter((bedroom) => {
  //     return (
  //       String(bedroom.capacity) === search ||
  //       String(bedroom.floor) === search ||
  //       String(bedroom.number) === search
  //     )
  //   })

  //   if (filteredBedrooms.length > 0) {
  //     return setBedrooms(filteredBedrooms)
  //   } else {
  //     return setBedrooms(bedroomsList)
  //   }
  // }

  // const [showPopup, setShowPopup] = useState<boolean>(false);

  // const handlePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  useEffect(() => {
    getAllBedrooms(token);
  }, []);

  return (
    <Margin>
      <SearchModel title="Bedroom" placeholder="Number, floor, capacity">
        <BedroomsDiv>
          {bedrooms.map((bedroom) => {
            return <BedroomsCard key={bedroom.id} bedroom={bedroom} />;
          })}
        </BedroomsDiv>
      </SearchModel>
    </Margin>
  );
};

export default BedroomsPage;
