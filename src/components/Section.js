import React from "react";
import { Box, Container } from "@chakra-ui/layout";

export const Section = ({ children, ...rest }) => {
  return (
    <Box py={40} {...rest}>
      <Container>{children}</Container>
    </Box>
  );
};
