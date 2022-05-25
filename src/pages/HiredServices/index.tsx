import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import HiredServiceCard from '../../components/HiredServiceCard'
import {Container, DivInitial, DivSearch, InputDiv, Ul} from './style'


const arrayTeste = [
    {
        id: 1,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: false
    },
    {
        id: 2,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: false
    },
    {
        id: 3,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: false
    },
    {
        id: 4,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: false
    },
    {
        id: 5,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: false
    },
    {
        id: 6,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: true
    },
    {
        id: 7,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: false
    },
    {
        id: 8,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: true
    },
    {
        id: 9,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: false
    },
    {
        id: 10,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: true
    },
    {
        id: 11,
        bedroom: "5",
        start_date: "15/05/2020",
        end_date: "20/05/2020",
        paid: true
    }
]

const HiredService = () => {
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
            {arrayTeste.map(teste => <HiredServiceCard hiredService={teste} />)}
          </Ul>
        </main>
      </Container>
    )
}

export default HiredService