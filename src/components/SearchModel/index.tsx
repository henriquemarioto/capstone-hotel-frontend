import { CardsDiv, MainDiv, SearchSection, TitleSection } from "./styles";
import { FaSearch, FaArrowLeft, FaExchangeAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { ReactNode, useState } from "react";
import { useBedroom } from "../../providers/Bedroom";

interface Props {
  children?: ReactNode;
  title: string;
  placeholder: string;
  searchFunction?: any;
  alterStatusFunction?: any;
}

const SearchModel = ({
  title,
  placeholder,
  searchFunction,
  alterStatusFunction,
  children,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { filterByStatus } = useBedroom();
  //const [status, setStatus] = useState<boolean>(false)
  const history = useHistory();

   

  return (
    <MainDiv>
      <TitleSection>
        <button onClick={() => history.push("/dashboard")}>
          <FaArrowLeft />
        </button>
        <h1>{title}</h1>
      </TitleSection>

      <SearchSection>
        <Input
          title={`Search a ${title}`}
          type="text"
          placeholder={placeholder}
          onChange={(evt) => setInputValue(evt.target.value)}
          onKeyPress={(evt) =>
            evt.key === "Enter" && searchFunction(inputValue)
          }
        />

        {/* <Input title="Status" checkbox onChange={(evt) => setStatus(Boolean(evt.target.value))} /> */}

        <Button type="button" onClick={() => searchFunction(inputValue)}>
          <FaSearch />
        </Button>

        <Button onClick={alterStatusFunction}><FaExchangeAlt /></Button>
      </SearchSection>

      <CardsDiv>{children}</CardsDiv>
    </MainDiv>
  );
};

export default SearchModel;
