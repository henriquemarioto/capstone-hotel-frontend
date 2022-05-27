import { FaCashRegister } from "react-icons/fa";
import { useHiredService } from "../../providers/HiredService";
import { Li, Paid, Pay } from "./style";

const HiredServiceCard = ({ hiredService }: any) => {
  const {updatedHiredService} = useHiredService()

  return (
    <Li>
      <h2>
        <span>Contract id: </span>
        {hiredService.id}
      </h2>
      <p>
        <span>Client: </span>
        {hiredService.client.name}
      </p>
      <p>
        <span>Bedroom: </span>
        {hiredService.bedroom_number}
      </p>
      <p>
        <span>Start Date: </span>
        {new Date(hiredService.start_date).toLocaleDateString("pt-bt")}
      </p>
      <p>
        <span>End Date: </span>{" "}
        {new Date(hiredService.end_date).toLocaleDateString("pt-bt")}
      </p>
      <p>
        <span>Price: </span>{" "}
        {hiredService.total_price.toString()}
      </p>
      <div>
        <span>Paid: </span>
        <Paid paid={hiredService.paid}> {hiredService.paid.toString()} </Paid>
      </div>

      {!hiredService.paid && (
        <Pay onClick={() => updatedHiredService(hiredService.id)}>
          <FaCashRegister />
        </Pay>
      )}
    </Li>
  );
};

export default HiredServiceCard;
