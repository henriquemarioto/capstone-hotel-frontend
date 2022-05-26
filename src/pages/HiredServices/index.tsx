import { useEffect } from "react"
import HiredServiceCard from "../../components/HiredServiceCard"
import Margin from "../../components/Margin"
import SearchModel from "../../components/SearchModel"
import { useHiredService } from "../../providers/HiredService"
import { useLogin } from "../../providers/Login"
import { Ul } from "./style"

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
    <Margin>
      <SearchModel title="Contracts" placeholder="Client name, service name, bedroom number...">
        <Ul>
          {hiredServices.map((hiredService) => (
            <HiredServiceCard
              key={hiredService.id}
              hiredService={hiredService}
            />
          ))}
        </Ul>
      </SearchModel>
    </Margin>
  );
}

export default HiredService
