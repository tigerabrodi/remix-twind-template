import { css, apply } from "twind/css";

export const getGlobalStyles = () => css`
  html,
  body {
    ${apply`bg-black`}
  }
`;
