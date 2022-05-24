import { FaBars } from 'react-icons/fa'
import { HeaderDiv } from './style'
import { useHistory } from 'react-router-dom'

const Header = () => {

  const history = useHistory()

  return (
    <HeaderDiv>
      <div className='container'>
        <div className='col-left'>
          <h1>Hotel Capstone</h1>
        </div>
        <nav>
          <FaBars
            size='25'
            className='menu-bar'
          />
          <ul className='col-right'>
            <li onClick={() => history.push('/')}>Clients</li>
            <li onClick={() => history.push('/')}>Bedrooms</li>
            <li onClick={() => history.push('/')}>Contracts</li>
            <li onClick={() => history.push('/')}>Services</li>
            <li onClick={() => history.push('/')}>Employees</li>
          </ul>
        </nav>
      </div>
    </HeaderDiv>
  )
}

export default Header
