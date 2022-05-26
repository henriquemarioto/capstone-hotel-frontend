import { useEffect, useState } from "react"
import { FaArrowLeft, FaSearch } from "react-icons/fa"
import HiredServiceCard from "../../components/HiredServiceCard"
import { useHiredService } from "../../providers/HiredService"
import { useLogin } from "../../providers/Login"
import { Container, DivInitial, DivSearch, InputDiv, Ul } from "./style"

const HiredService = () => {

  const {getAllHiredServices, hiredServices} = useHiredService()
  const {token} = useLogin()
  // const [search, setSearch] = useState("")
  // const [contractsList, setContractsList] = useState(arrayTeste)

  // const filter = (search: string) => {
  //   const contracts = [...contractsList]
  //   const filteredContracts = contracts.filter((contract) => {
  //     return (
  //       String(contract.bedroom).toLocaleLowerCase() === search ||
  //       String(contract.id).toLocaleLowerCase() === search ||
  //       String(contract.paid).toLocaleLowerCase() === search
  //     )
  //   })

  //   if (filteredContracts.length > 0) {
  //     return setContractsList(filteredContracts)
  //   } else {
  //     return setContractsList(arrayTeste)
  //   }
  // }

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
          <input
            type="text"
          />
        </InputDiv>
        <button >
          <FaSearch />
        </button>
      </DivSearch>
      <main>
        <Ul>
          {hiredServices.map((hiredService) => (
            <HiredServiceCard key={hiredService.id} hiredService={hiredService} />
          ))}
        </Ul>
      </main>
    </Container>
  )
}

export default HiredService
