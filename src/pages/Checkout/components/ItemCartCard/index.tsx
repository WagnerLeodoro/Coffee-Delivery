import { Trash } from "phosphor-react";
import { useContext } from "react";
import { QuantityOrder } from "../../../../components/QuantityOrder";
import { RegularText } from "../../../../components/Typography";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { ActionsContainer, ItemCartContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export default function ItemCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useContext(CartContext);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  return (
    <ItemCartContainer>
      <div>
        <img src={`../src/assets/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="base-subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityOrder
              onIncrement={handleIncrease}
              onDecrement={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <RegularText color="base-text" weight={700}>
        R${" "}
        {coffeeTotal.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}
      </RegularText>
    </ItemCartContainer>
  );
}
