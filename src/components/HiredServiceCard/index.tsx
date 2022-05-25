import { Li, DivContract } from "./style";

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
            {hiredService.client}
          </p>
          <p>
            <span>Bedroom: </span>
            {hiredService.bedroom}
          </p>
          <p>
            <span>Start Date: </span>
            {hiredService.start_date}
          </p>
          <p>
            <span>End Date: </span> {hiredService.end_date}
          </p>
          <p>
            <span>Status: </span>
            {hiredService.paid ? "Paid" : "Pending"} 
          </p>
        </DivContract>
      </Li>
    </>
  );
};

export default HiredServiceCard;
