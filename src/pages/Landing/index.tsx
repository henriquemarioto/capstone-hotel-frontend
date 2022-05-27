import { Main, Header, Container, Footer, Logo, Tittle, Button } from "./style";
import logo from "../../img/logo.svg";
import Peoples from "../../img/peoples.svg";
import peopleBoard from "../../img/peopleboard.svg";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <Button onClick={() => history.push("/login")}>Entrar</Button>
      </Header>
      <Main>
        <Container>
          <Tittle>Gerenciamento</Tittle>
          <p>
            Gerencie seu hotel de forma rápida com um sistema simplificado para
            funcionário e gerente.
          </p>
          <img src={Peoples} alt="background" />
        </Container>
        <Footer>
          <button onClick={() => history.push("/login")}>Entrar</button>
          <div>
            <Tittle>Controle</Tittle>
            <p>
              Esteja no controle do seu hotel, de qualquer lugar, a qualquer
              hora.
            </p>
            <img src={peopleBoard} alt="background" />
          </div>
          <img className="logo" src={logo} alt="logo" />
        </Footer>
      </Main>
    </>
  );
};

export default Landing;
