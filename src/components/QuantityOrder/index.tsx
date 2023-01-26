import { Minus, Plus } from "phosphor-react";
import { Counter } from "./styles";

interface QuantityOrderProps {
  quantity: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export function QuantityOrder({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityOrderProps) {
  return (
    <Counter>
      <button onClick={onDecrement} disabled={quantity <= 1}>
        <Minus width={14} weight="bold" />
      </button>
      <input type="number" id="coffeeAmount" readOnly value={quantity} />
      <button onClick={onIncrement}>
        <Plus width={14} weight="bold" />
      </button>
    </Counter>
  );
}
