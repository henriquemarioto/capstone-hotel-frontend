import { useEffect, useState } from "react"
import { FaArrowLeft, FaSearch } from "react-icons/fa"
import HiredServiceCard from "../../components/HiredServiceCard"
import { useHiredService } from "../../providers/HiredService"
import { useLogin } from "../../providers/Login"
import { Container, DivInitial, DivSearch, InputDiv, Ul } from "./style"

const HiredService = () => {
  const { getAllHiredServices, hiredServices, filter, filteredHired } =
    useHiredService()
  const { token } = useLogin()
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllHiredServices(token)
  }, [])

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
          <input
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputDiv>
        <button onClick={() => filter(search)}>
          <FaSearch />
        </button>
      </DivSearch>
      <main>
        <Ul>
          {filteredHired.length > 0
            ? filteredHired.map((hiredService) => (
                <HiredServiceCard
                  key={hiredService.id}
                  hiredService={hiredService}
                />
              ))
            : hiredServices.map((hiredService) => (
                <HiredServiceCard
                  key={hiredService.id}
                  hiredService={hiredService}
                />
              ))}
        </Ul>
      </main>
    </Container>
  )
}

export default HiredService
