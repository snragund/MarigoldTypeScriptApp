import { Box, Text, MarigoldProvider } from "@marigold/components";
import theme from "@marigold/theme-b2b";
import { Helmet } from "react-helmet";
import React from "react";
import ReactDOM from "react-dom";
import { TicketCardLayout } from "./components/TicketCardLayout";

ReactDOM.render(
  <React.StrictMode>
    <MarigoldProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Marigold Design System</title>
      </Helmet>
      <Box alignItems="center">
        <Box p="8px" width="100%">
          <Text as="h1" variant="headline1" align="center">
            Beliebteste Events
          </Text>
        </Box>
        <TicketCardLayout />
      </Box>
    </MarigoldProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
