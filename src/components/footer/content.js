import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  width: 60vw;
`;

const FooterInfo = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Copyright © {year} Kevin Cai</p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default FooterInfo;
