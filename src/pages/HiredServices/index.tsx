import { useEffect } from "react"
import HiredServiceCard from "../../components/HiredServiceCard"
import Margin from "../../components/Margin"
import SearchModel from "../../components/SearchModel"
import { useHiredService } from "../../providers/HiredService"
import { useLogin } from "../../providers/Login"
import { Ul } from "./style"
import Loading from "../../components/Loading"

const HiredService = () => {
  const { getAllHiredServices, hiredServices, filter, filteredHired } =
    useHiredService()
  const { token } = useLogin()

  useEffect(() => {
    getAllHiredServices(token)
  }, [])

  return (
    <Margin>
      <SearchModel
        title="Contracts"
        placeholder="Client name, service name, bedroom number..."
        searchFunction={filter}
      >
        <Ul>
          {hiredServices.length === 0 ? (
            <Loading />
          ) : filteredHired.length > 0 ? (
            filteredHired.map((hiredService) => (
              <HiredServiceCard
                key={hiredService.id}
                hiredService={hiredService}
              />
            ))
          ) : (
            hiredServices.map((hiredService) => (
              <HiredServiceCard
                key={hiredService.id}
                hiredService={hiredService}
              />
            ))
          )}
        </Ul>
      </SearchModel>
    </Margin>
  )
}

export default HiredService
