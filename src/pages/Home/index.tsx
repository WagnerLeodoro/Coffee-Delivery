import { CoffeeListMenu } from "./components/CoffeeListMenu";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeListMenu />
    </HomeContainer>
  );
}
