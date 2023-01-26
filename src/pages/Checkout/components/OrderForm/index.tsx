import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

import { CheckoutFormContainer, FormSectionContainer } from "./styles";

export function OrderForm() {
  const { colors } = useTheme();
  return (
    <CheckoutFormContainer>
      <TitleText weight="700" size="header-sm">
        Complete seu Pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          icon={
            <MapPinLine
              width={22}
              weight="regular"
              color={colors["yellow-dark"]}
            />
          }
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          icon={
            <CurrencyDollar
              width={22}
              weight="regular"
              color={colors["purple"]}
            />
          }
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  );
}
