import { Menu, Container, Admin } from './style'
import GlobalStyle from "./style";
import icon_people from "./img/icon-people.png"
import icon from "./img/icon.png"
import background from "./img/background.png"
import Header from '../../components/Header';
import { useState } from 'react';
const Dashboard = () => {
    
    const [isAdmin, setIsAdmin] = useState(true)
    
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Menu>
                <img className='background' src={background} alt=""/>
                   {isAdmin ?
                    <Admin>
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
                        <div>
                            <span>+</span>
                            <p>New bedroom</p>
                            <img src={icon} alt="icon"/>
                        </div>
                        <div>
                            <span>+</span>
                            <p>New service</p>
                            <img src={icon} alt="icon"/>
                        </div>
                        <div>
                            <span>+</span>
                            <p>New employee</p>
                            <img src={icon} alt="icon"/>
                        </div>
                    </Admin>
                    :
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
                   }
            </Menu>
        </>
    );
}

export default Dashboard;