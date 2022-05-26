import { CardsDiv, MainDiv, SearchSection, TitleSection } from "./styles";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  title: string;
  placeholder: string;
  searchFunction?: any;
}

const SearchModel = ({
  title,
  placeholder,
  searchFunction,
  children,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
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
        <form>
          <Input
            title={`Search a ${title}`}
            type="text"
            placeholder={placeholder}
            onChange={(evt) => setInputValue(evt.target.value)}
            onKeyPress={(evt) =>
              evt.key === "Enter" && searchFunction(inputValue)
            }
          />

          <Button type="button" onClick={() => searchFunction(inputValue)}>
            <FaSearch />
          </Button>
        </form>
      </SearchSection>

      <CardsDiv>{children}</CardsDiv>
    </MainDiv>
  );
};

export default SearchModel;
