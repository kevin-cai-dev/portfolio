import * as React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h2`
  margin: 3rem 0 0 0;
  font-size: 4rem;
  font-family: var(--subtitle-font);
  color: var(--title-color);
  text-shadow: 1px 1px var(--subtitle-shadow);
`;

const Subtitle = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Subtitle;
