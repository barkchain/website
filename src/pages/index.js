import * as React from "react";
import {
  Container,
  Flex,
  Box,
  HStack,
  Link,
  Heading,
  Text,
  Center,
  Grid,
  Divider,
  Stack,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { Logo } from "../components/logo";
import { Link as GLink } from "gatsby";
import bg from "../images/bark-bg.jpg";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Section } from "../components/Section";
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import sectionBg from "../images/layer-bg.jpg";
import { CosmoStarIcon } from "../components/icons/star";
import DogShip from "../images/dog-ship.png";

const StarIcon = (props) => <CosmoStarIcon position="absolute" {...props} />;

// markup
const IndexPage = () => {
  return (
    <Box>
      <Box
        backgroundImage={`url(${bg})`}
        backgroundSize="cover"
        backgroundPosition="bottom center"
        height="100%"
        width="full"
        maxWidth="2000px"
        mx="auto"
      >
        <Container py={6} maxWidth="1200px">
          <Flex justifyContent="space-between" alignItems="center">
            <Logo width="200px" />
            <HStack spacing={6}>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="outline"
                  rightIcon={<ChevronDownIcon />}
                >
                  English
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup
                    defaultValue="en"
                    title="Language"
                    type="radio"
                  >
                    <MenuItemOption value="en">English</MenuItemOption>
                    <MenuItemOption value="dog" as={GLink} to="/dog">
                      Dog
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
              <Link href="http://google.com" isExternal fontSize="30px">
                <FaTwitter />
              </Link>
              <Link href="http://google.com" isExternal fontSize="30px">
                <FaDiscord />
              </Link>
            </HStack>
          </Flex>
          <Image src={DogShip} mx="auto" />
        </Container>
      </Box>
      <Container pb={40}>
        <Grid gridTemplateColumns="repeat(12,1fr)" rowGap={8}>
          <Box
            gridColumn={{ base: "1/span 12", md: "2/span 10" }}
            position="relative"
          >
            <StarIcon left="-20%" />
            <StarIcon left="0" bottom="-35%" />
            <StarIcon right="10%" top="20%" />
            <StarIcon left="-15%" bottom="-80%" />
            <Heading fontSize={{ base: "6xl", lg: "8xl" }} lineHeight="1">
              What is BarkChain?
            </Heading>
          </Box>
          <Stack
            spacing={6}
            gridColumn={{ base: "1/span 12", md: "5/span 7" }}
            color="purple.200"
            px={{ base: 6, md: 0 }}
          >
            <Text>
              Barkchain is the barkiest chain in all the cosmos. Fairdropped to
              many different participants of the cosmos ecosystem with 100% of
              the allocation going to the community (75% airdropped and 25% to
              the community pool).
            </Text>
            <Text>
              There have been many dog coins, but there is only one barkchain,
              full of barkstronauts working together to bark across the
              interchain.
            </Text>
          </Stack>
        </Grid>
      </Container>
      <Divider />
      <Section px={{ base: 0, md: 12 }} position="relative" overflow="hidden">
        <Image
          src={sectionBg}
          width="120%"
          filter="blur(20px)"
          position="absolute"
          top={-20}
          right={-20}
          zIndex={-1}
        />
        <Grid gridTemplateColumns="repeat(12,1fr)" rowGap={6}>
          <Box
            gridColumn={{ base: "1/span 12", md: "2/span 8" }}
            alignSelf="flex-start"
          >
            <Center
              bg="purple.800"
              borderRadius="xl"
              px={2}
              py={4}
              fontSize={{ base: "xl", lg: "4xl" }}
              color="purple.300"
              position="relative"
              fontFamily="mono"
              display="inline-flex"
              ml="auto"
              mb={2}
            >
              <Text>(bark, bark)</Text>
              <TriangleDownIcon
                color="purple.800"
                position="absolute"
                bottom={{ base: -3, lg: -5 }}
                left={6}
              />
            </Center>
            <Heading
              fontSize={{ base: "6xl", lg: "8xl" }}
              textAlign="left"
              lineHeight="1"
            >
              Why BarkChain?
            </Heading>
          </Box>
        </Grid>
        <Grid
          gridTemplateColumns="repeat(12,1fr)"
          gridGap={6}
          rowGap={{ base: 12, md: 24 }}
          mt={24}
          px={6}
        >
          <Box
            gridColumn={{ base: "1/span 12", md: "1/span 5" }}
            position="relative"
          >
            <StarIcon left="-20%" />
            <StarIcon right="-20%" top="-15%" />
            <Heading as="h4" fontSize="2xl" mb={4}>
              How do I get Bark?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                If you had a balance of atom, osmo, tick, or Juno at the time of
                the snapshot then you probably already have some bark!
              </Text>
              <Text>
                Soon enough you will likely be able to buy/sell bark across the
                interchain on barkilicious DEXes like Osmosis.
              </Text>
            </Stack>
          </Box>
          <Box
            gridColumn={{ base: "1/span 12", md: "8/span 5" }}
            position="relative"
          >
            <StarIcon left="-20%" top="10%" />
            <StarIcon right="35%" top="-25%" />
            <Heading as="h4" fontSize="2xl" mb={4}>
              Can I stake Bark?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                You sure can! Stake your bark with any barkchain validator to
                help secure the network and gain adorably barkey rewards!
              </Text>
            </Stack>
          </Box>
          <Box
            gridColumn={{ base: "1/span 12", md: "1/span 5" }}
            position="relative"
          >
            <StarIcon top="-25%" left="10%" />
            <StarIcon right="-10%" top="10%" />
            <Heading as="h4" fontSize="2xl" mb={4}>
              What are the tokenomics?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                The cutest tokenomics around include an entirely fair launch and
                high initial inflation rate which decays over time.
              </Text>
              <Button
                size="lg"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
                variant="solid"
                colorScheme="purple"
              >
                View More Details
              </Button>
            </Stack>
          </Box>
          <Box gridColumn={{ base: "1/span 12", md: "8/span 5" }}>
            <Heading as="h4" fontSize="2xl" mb={4}>
              How do I get involved?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                Follow barkchain on Twitter and join our discord! The barkchain
                community is entirely community owned and operated.
              </Text>
            </Stack>
          </Box>
          <Box gridColumn={{ base: "1/span 12", md: "1/span 5" }}>
            <Heading as="h4" fontSize="2xl" mb={4}>
              What is the Barkchain roadmap?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                To bark across the interchain in style! Any further development
                and roadmap will be entirely determined by the barkchain
                community. (bark, bark)
              </Text>
            </Stack>
          </Box>
        </Grid>
      </Section>
    </Box>
  );
};

export default IndexPage;
