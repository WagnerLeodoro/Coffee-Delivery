import { useContext } from "react";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { CartContext } from "../../../../contexts/CartContext";
import { ConfirmationContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export default function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useContext(CartContext);
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  return (
    <ConfirmationContainer>
      <div>
        <RegularText size="header-sm">Total de Itens</RegularText>
        <RegularText>
          R${" "}
          {cartItemsTotal.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </RegularText>
      </div>
      <div>
        <RegularText size="header-sm">Entrega</RegularText>
        <RegularText>
          R${" "}
          {DELIVERY_PRICE.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" color="base-subtitle" size="header-md">
          Total
        </RegularText>
        <RegularText weight="700" color="base-subtitle" size="header-md">
          R${" "}
          {cartTotal.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </RegularText>
      </div>
      <Button
        disabled={cartQuantity <= 0}
        type="submit"
        text="Confirmar Pedido"
      />
    </ConfirmationContainer>
  );
}
