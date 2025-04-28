import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
#root{
  box-sizing: border-box !important;
  user-select: none;
}
`;
export default GlobalStyle;
