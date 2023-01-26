import styled from "styled-components";

export const IntroContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 34rem;
  top: 6.5rem;

  img {
    width: 476px;
    height: 360px;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  width: 36.5rem;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3.5rem;
  gap: 1rem;
`;

export const BannerTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => props.theme.sizes["header-xl"]};
  color: ${(props) => props.theme.colors["base-title"]};
`;

export const BannerSubtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.sizes["text-xl"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const Items = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 294px 294px;
  grid-row: 2;
  grid-gap: 2.5rem;
  width: 36.5rem;
  height: 5.25rem;
`;
