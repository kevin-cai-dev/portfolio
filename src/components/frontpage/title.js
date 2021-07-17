import * as React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  margin: 0;
  font-size: 10em;
  font-family: var(--title-font);
  color: var(--title-color);
  letter-spacing: 0.5rem;
  text-shadow: 2px 2px var(--title-shadow);
`;

const Title = () => {
  return <TitleWrapper>Kevin Cai</TitleWrapper>;
};

export default Title;
