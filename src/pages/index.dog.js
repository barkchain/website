import * as React from "react";
import {
  Container,
  useColorMode,
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
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { Logo } from "../components/logo";
import bg from "../images/bark-bg.jpg";
import { Link as GLink } from "gatsby";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { What } from "../components/What";
import { Section } from "../components/Section";
import {
  ArrowForwardIcon,
  TriangleDownIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import sectionBg from "../images/layer-bg.jpg";
import { CosmoStarIcon } from "../components/icons/star";
import DogShip from "../images/dog-ship.png";

const StarIcon = (props) => <CosmoStarIcon position="absolute" {...props} />;

// markup
const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
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
            <Logo height="50px" />
            <HStack spacing={6}>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="outline"
                  rightIcon={<ChevronDownIcon />}
                >
                  Dog
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup
                    defaultValue="dog"
                    title="Language"
                    type="radio"
                  >
                    <MenuItemOption value="en" as={GLink} to="/">
                      English
                    </MenuItemOption>
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
              Bark bark Bark?
            </Heading>
          </Box>
          <Stack
            spacing={6}
            gridColumn={{ base: "1/span 12", md: "5/span 7" }}
            color="purple.200"
          >
            <Text>
              Bark bark bark bark bark bark bark bark bark. Bark bark bark bark
              bark bark bark bark bark bark 100% bark bark bark bark bark bark
              bark (75% bark bark 25% bark bark bark bark).
            </Text>
            <Text>
              Bark bark bark bark bark bark, bark bark bark bark bark bark, bark
              bark bark bark bark bark bark bark bark bark.
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
                bottom={-4}
                left={6}
              />
            </Center>
            <Heading
              fontSize={{ base: "6xl", lg: "8xl" }}
              textAlign="left"
              lineHeight="1"
            >
              Bark bark?
            </Heading>
          </Box>
        </Grid>
        <Grid
          gridTemplateColumns="repeat(12,1fr)"
          gridGap={6}
          rowGap={24}
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
              Bark bark bark bark Bark?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                Bark bark bark bark bark bark bark, bark, bark, bark bark bark
                bark bark bark bark bark bark bark bark bark bark bark bark!
              </Text>
              <Text>
                Bark bark bark bark bark bark bark bark bark/bark bark bark bark
                bark bark bark bark bark bark.
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
              Bark bark bark Bark?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                Bark bark bark! bark bark bark bark bark bark bark bark bark
                bark bark bark bark bark bark barkey bark!
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
              Bark bark bark bark?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                Bark bark bark bark bark bark bark bark bark bark bark bark bark
                bark bark bark bark bark.
              </Text>
              <Button
                size="lg"
                rightIcon={<ArrowForwardIcon />}
                alignSelf="flex-start"
                variant="solid"
                colorScheme="purple"
              >
                Bark bark Bark
              </Button>
            </Stack>
          </Box>
          <Box gridColumn={{ base: "1/span 12", md: "8/span 5" }}>
            <Heading as="h4" fontSize="2xl" mb={4}>
              Bark bark bark bark bark?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                Bark bark bark bark bark bark bark bark! bark bark bark bark
                bark bark bark bark bark.
              </Text>
            </Stack>
          </Box>
          <Box gridColumn={{ base: "1/span 12", md: "1/span 5" }}>
            <Heading as="h4" fontSize="2xl" mb={4}>
              Bark bark bark bark bark?
            </Heading>
            <Stack spacing={6} color="purple.300">
              <Text>
                Bark bark bark bark bark bark bark! Bark bark bark bark bark
                bark bark bark bark bark bark bark bark. (bark, bark)
              </Text>
            </Stack>
          </Box>
        </Grid>
      </Section>
    </Box>
  );
};

export default IndexPage;
