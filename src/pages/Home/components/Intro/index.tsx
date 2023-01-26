import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import cupOfCoffee from "../../../../assets/BannerCupCoffee.png";
import InfoWithIcon from "../../../../components/InfoWithIcons";

import {
  BannerContent,
  BannerSubtitle,
  BannerTitle,
  IntroContainer,
  Items,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <BannerContent>
        <BannerTitle>
          Encontre o café perfeito para qualquer hora do dia
        </BannerTitle>
        <BannerSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a {"\n"}
          qualquer hora
        </BannerSubtitle>
        <Items>
          <InfoWithIcon
            icon={<ShoppingCart size={16} weight="fill" />}
            text="Compra simples e segura"
            iconBg="yellow-dark"
          />
          <InfoWithIcon
            icon={<Package size={16} weight="fill" />}
            text="Embalagem mantém o café intacto"
            iconBg="base-text"
          />
          <InfoWithIcon
            icon={<Timer size={16} weight="fill" />}
            text="Entrega rápida e rastreada"
            iconBg="yellow"
          />
          <InfoWithIcon
            icon={<Coffee size={16} weight="fill" />}
            text="O café chega fresquinho até você"
            iconBg="purple"
          />
        </Items>
      </BannerContent>
      <div>
        <img src={cupOfCoffee} alt="" />
      </div>
    </IntroContainer>
  );
}
