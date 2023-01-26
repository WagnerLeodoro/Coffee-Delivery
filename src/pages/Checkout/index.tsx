import { OrderForm } from "./components/OrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CheckoutContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit, reset } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useContext(CartContext);

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/successCheckout", {
      state: data,
    });
    cleanCart();
  }
  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer>
        <form onSubmit={handleSubmit(handleConfirmOrder)} action="">
          <OrderForm />
          <SelectedCoffees />
        </form>
      </CheckoutContainer>
    </FormProvider>
  );
}
