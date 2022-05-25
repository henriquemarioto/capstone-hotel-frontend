import { Menu, Container } from './style'
import GlobalStyle from "./style";
import icon_people from "./img/icon-people.png"
import icon from "./img/icon.png"
import background from "./img/background.png"
import Header from '../../components/Header';
const Dashboard = () => {
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Menu>
                <img className='background' src={background} alt=""/>
                <Container>
                    <div>
                        <span>+</span>
                        <p>New client</p>
                        <img src={icon_people} alt="icon"/>
                    </div>
                    <div>
                        <span>+</span>
                        <p>New contract</p>
                        <img src={icon} alt="icon"/>
                    </div>
                </Container>
            </Menu>
        </>
    );
}

export default Dashboard;