import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import "typeface-roboto";

import Header from "./Header";
import People from "./People";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box marginY={2}>
          <People />
        </Box>
      </Container>
    </React.Fragment>
  );
}
