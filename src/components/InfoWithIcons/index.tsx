import { HTMLAttributes, ReactNode } from "react";
import { BaseIcon, Items } from "./styles";

interface InfoWithIconProps extends HTMLAttributes<HTMLDivElement> {
  text: string | ReactNode;
  icon: ReactNode;
  iconBg:
    | "yellow"
    | "yellow-light"
    | "yellow-dark"
    | "purple"
    | "purple-light"
    | "purple-dark"
    | "base-text";
}

export default function InfoWithIcon({
  text,
  icon,
  iconBg,
  ...rest
}: InfoWithIconProps) {
  return (
    <Items {...rest}>
      <BaseIcon iconBg={iconBg}>{icon}</BaseIcon>
      <p>{text}</p>
    </Items>
  );
}
