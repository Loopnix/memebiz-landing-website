import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";
// Components
import { Footer } from "../footer";

const Container = styled.main`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
  color: ${(props) => props.theme.colors.primary}}
`;


const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
