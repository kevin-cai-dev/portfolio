import * as React from "react";
import styled from "styled-components";
import ImgLink from "../common/image-gen";
import ImageInfo from "../common/image-info";

// add span here, turn into vertical flexbox, add opacity and transitions

const IconWrapper = styled.div`
  margin-top: 1rem;
  display: flex;

  .link-bundle .p {
    visibility: hidden;
  }
`;

const LinkBundle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hover-text {
    visibility: hidden;
  }

  a:hover + .hover-text {
    visibility: visible;
  }

  p {
    margin: 0;
    padding: 0;
    width: 3.5rem;
  }
`;

const IconLinks = () => {
  const links = ["github", "linkedin", "resume", "email"];

  const linkInfo = ImageInfo.filter((item) => links.includes(item.name));

  return (
    <IconWrapper>
      {linkInfo.map((item, i) => {
        return (
          <LinkBundle key={i}>
            <ImgLink {...item} />
            <p className="hover-text">{item.name}</p>
          </LinkBundle>
        );
      })}
    </IconWrapper>
  );
};

export default IconLinks;
