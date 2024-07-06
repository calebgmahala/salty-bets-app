import { useNavigate } from "react-router-dom";
import { Button } from "../stories/Button";
import { SaltyBetsR } from "../stories/icons";
import { SaltyBetsB } from "../stories/icons/SaltyBetsB";
import imgUrl from "/assets/background.png?url";

export const Auth = () => {
  const navigate = useNavigate();
  const onBlueClick = () => {
    navigate("/login")
  }
  return (
    <main className="h-screen w-screen flex flex-col">
      <header className="bg-white h-96 w-full"></header>
      <section
        className="h-full w-full p-12 flex flex-col justify-evenly"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Button className="text-9xl w-full bg-white">
          <SaltyBetsR className="h-56 mr-1" />
          IGN UP
        </Button>
        <Button onClick={onBlueClick} className="text-9xl w-full bg-white">
          <SaltyBetsB className="h-56 mr-1" />
          OOL
        </Button>
      </section>
    </main>
  );
};
