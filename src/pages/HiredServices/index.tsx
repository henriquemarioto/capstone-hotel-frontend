import { useEffect } from 'react'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import HiredServiceCard from '../../components/HiredServiceCard'
import { useHiredService } from '../../providers/HiredService'
import { useLogin } from '../../providers/Login'
import {Container, DivInitial, DivSearch, InputDiv, Ul} from './style'


const HiredService = () => {

  const {getAllHiredServices, hiredServices} = useHiredService()
  const {token} = useLogin()
  

  useEffect(() => {
    getAllHiredServices(token)
  },[])

    return (
        <Container>
        <DivInitial>
          <button>
            <FaArrowLeft />
          </button>
          <h1>Contracts</h1>
          <span></span>
        </DivInitial>
        <DivSearch>
          <InputDiv>
            <label>Find a contract</label>
            <input type="text" />
          </InputDiv>
          <button>
            <FaSearch />
          </button>
        </DivSearch>
        <main>
          <Ul>
            {hiredServices.map(hiredservice => <HiredServiceCard hiredService={hiredservice}/>)}
          </Ul>
        </main>
      </Container>
    )
}

export default HiredService