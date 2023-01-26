import { coffees } from "../../../../data/coffees";
import { CoffeeCards } from "../CoffeeCards";
import { CoffeeList, CoffeeListContainer } from "./styles";

export function CoffeeListMenu() {
  return (
    <CoffeeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCards key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeListContainer>
  );
}
