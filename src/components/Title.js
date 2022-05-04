import styled from "styled-components";

export const SectionSpan = styled.span`
   {
    color: var(--text-primary);
  }
`;

export const SectionP = styled.p`
   {
    color: var(--text-primary);
    &::after {
      content: "";
      position: absolute;
      background-color: var(--text-primary);
      width: 10%;
      height: 2px;
      bottom: -50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const SectionTitle = styled.h2`
   {
    color: var(--section-header);
  }
`;
