import { Li, DivContract, Status} from "./style";

const HiredServiceCard = ({ hiredService }: any) => {
  return (
    <>
      <Li>
        <DivContract>
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
            {new Date(hiredService.start_date).toLocaleDateString('pt-bt')}
          </p>
          <p>
            <span>End Date: </span> {new Date(hiredService.end_date).toLocaleDateString('pt-bt')}
          </p>
          <div>
            <span>Status: </span>
            <Status paid={hiredService.paid}> {hiredService.paid.toString()} </Status> 
          </div>
        </DivContract>
      </Li>
    </>
  );
};

export default HiredServiceCard;
