import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import InfoWithIcon from "../../components/InfoWithIcons";
import { RegularText, TitleText } from "../../components/Typography";

import Illustration from "../../assets/Illustration.svg";
import { ConfirmationDetails, SuccessCheckoutContainer } from "./styles";

import { OrderData } from "../Checkout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { paymentMethods } from "../Checkout/components/OrderForm/PaymentMethodOptions";

interface LocationType {
  state: OrderData;
}

export function SuccessCheckout() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;
  return (
    <SuccessCheckoutContainer>
      <div>
        <TitleText color="yellow-dark" weight="800" size="header-xl">
          Uhu! Pedido confirmado
        </TitleText>
        <RegularText size="text-xl" color="base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <ConfirmationDetails>
          <InfoWithIcon
            className="addressContent"
            icon={<MapPin weight="fill" />}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
            iconBg="purple"
          />
          <InfoWithIcon
            icon={<Timer weight="fill" />}
            text={
              <RegularText>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            }
            iconBg="yellow"
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            text={
              <RegularText>
                Pagamento na entrega <br />{" "}
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
            iconBg="yellow-dark"
          />
        </ConfirmationDetails>
        <img src={Illustration} />
      </section>
    </SuccessCheckoutContainer>
  );
}
