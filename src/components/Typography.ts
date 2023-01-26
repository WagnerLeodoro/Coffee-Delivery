import styled from "styled-components";
import { defaultTheme } from "../styles/themes/default";

const theme = defaultTheme;

interface TitleTextProps {
  size?: keyof typeof theme.sizes;
  color?: keyof typeof theme.colors;
  weight?: string | number;
}

interface RegularTextProps {
  size?: keyof typeof theme.sizes;
  color?: keyof typeof theme.colors;
  weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`${color ?? "base-title"}`]};
  font-size: ${({ theme, size }) => theme.sizes[`${size ?? "header-md"}`]};
  font-family: ${({ theme }) => theme.fonts["title"]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`;

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`${color ?? "base-title"}`]};
  font-size: ${({ theme, size }) => theme.sizes[`${size ?? "text-base"}`]};
  font-family: ${({ theme }) => theme.fonts["regular"]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`;
