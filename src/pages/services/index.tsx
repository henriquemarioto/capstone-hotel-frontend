import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ServiceCard from "../../components/ServiceCard";

export const Services = () => {
  return (
    <>
      <Header />
      <Input label={"Input de teste"} />
      <Button>Botão teste</Button>
      <ServiceCard
        name="Café da manhã"
        description="Café da manhã gourmet com diversas opções."
        price={20}
      />
    </>
  );
};
