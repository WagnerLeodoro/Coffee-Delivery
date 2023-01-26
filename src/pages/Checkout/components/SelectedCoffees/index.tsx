import { useContext } from "react";
import { TitleText } from "../../../../components/Typography";
import { CartContext } from "../../../../contexts/CartContext";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";
import ItemCartCard from "../ItemCartCard";
import ConfirmationSection from "./ConfirmationSection";

export function SelectedCoffees() {
  const { cartItems } = useContext(CartContext);

  return (
    <SelectedCoffeesContainer>
      <TitleText weight="700" size="header-sm">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <ItemCartCard key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
