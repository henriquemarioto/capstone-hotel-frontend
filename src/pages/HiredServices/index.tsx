import { useEffect, useState } from "react"
import HiredServiceCard from "../../components/HiredServiceCard"
import Margin from "../../components/Margin"
import SearchModel from "../../components/SearchModel"
import { useHiredService } from "../../providers/HiredService"
import { useLogin } from "../../providers/Login"
import { Ul } from "./style"
import Loading from "../../components/Loading"

const HiredService = () => {
  const { getAllHiredServices, hiredServices, filter, filteredHired, filterByStatus } =
    useHiredService()
  const { token } = useLogin()

  const [status, setStatus] = useState<boolean>(false);

  const alterStatus = async () => {
    await filterByStatus(status);
    setStatus(!status);
  };

  useEffect(() => {
    getAllHiredServices()
  }, [])

  return (
    <Margin>
      <SearchModel
        title="Contracts"
        placeholder="Client name, service name, bedroom number..."
        searchFunction={filter}
        alterStatusFunction={alterStatus}
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
