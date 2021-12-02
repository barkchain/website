import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  Stack,
  Grid,
} from "@chakra-ui/layout";
import React from "react";

export const What = () => {
  return (
    <Container py={40}>
      <Grid gridTemplateColumns="repeat(12,1fr)">
        <Box gridColumn={{ base: "1/span 12", md: "1/span 6" }}>
          <Heading fontSize="6xl" lineHeight="1">
            What is BarkChain?
          </Heading>
        </Box>
        <Stack
          spacing={6}
          gridColumn={{ base: "1/span 12", md: "7/span 6" }}
          color="purple.200"
        >
          <Text>
            Barkchain is the barkiest chain in all the cosmos. Fairdropped to
            many different participants of the cosmos ecosystem with 100% of the
            allocation going to the community (75% airdropped and 25% to the
            community pool).
          </Text>
          <Text>
            There have been many dog coins, but there is only one barkchain,
            full of barkstronauts working together to bark across the
            interchain.
          </Text>
        </Stack>
      </Grid>
    </Container>
  );
};
