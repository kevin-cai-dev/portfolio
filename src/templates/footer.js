import React from "react";
import styled from "styled-components";
import Barrier from "../components/common/barrier";
import FooterInfo from "../components/footer/content";

const LayoutWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
`;

const Footer = () => {
  return (
    <LayoutWrapper>
      <Barrier id="footer" />
      <FooterInfo />
    </LayoutWrapper>
  );
};

export default Footer;
