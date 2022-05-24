import { Container } from './style'
import GlobalStyle from "./style";
import icon_people from "./img/icon-people.png"
import icon from "./img/icon.png"

const Dashboard = () => {
    return(
        <>
            <GlobalStyle/>
            <Container>
                <div>
                    <span>+</span>
                    <p>New client</p>
                    <img src={icon} alt="icon"/>
                </div>
                <div>
                    <span>+</span>
                    <p>New contractt</p>
                    <img src={icon_people} alt="icon"/>
                </div>
            </Container>
        </>
    );
}

export default Dashboard;