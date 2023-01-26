import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="base-subtitle">{title}</RegularText>
        <RegularText color="base-text" size="text-sm">
          {subtitle}
        </RegularText>
      </div>
    </SectionTitleContainer>
  );
}
