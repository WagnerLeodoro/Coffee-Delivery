import { useContext, useState } from "react";
import { QuantityOrder } from "../../../../components/QuantityOrder";
import { ShoppingCartButton } from "../../../../components/ShoppingCartButton";

import { ShoppingCartSimple } from "phosphor-react";
import { CardContainer, CardContent, CardDetails, Tags } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCards({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCoffeeToCart } = useContext(CartContext);

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CardContainer>
      <CardContent>
        <img src={`../src/assets/coffees/${coffee.photo}`} />
        <Tags>
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
        </Tags>

        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
        <CardDetails>
          <span>
            R${" "}
            <p>
              {coffee.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>
          </span>
          <QuantityOrder
            quantity={quantity}
            onIncrement={handleIncrease}
            onDecrement={handleDecrease}
          />
          <ShoppingCartButton
            cartBgColor="purple_dark"
            cartColor="white"
            onClick={handleAddToCart}
          >
            <ShoppingCartSimple width={22} weight="fill" />
          </ShoppingCartButton>
        </CardDetails>
      </CardContent>
    </CardContainer>
  );
}
