import { ContainerStyle as Container } from "../../components/Container.theme";
import { TextStyle as Text } from "../../components/Text.theme";
// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = {
  styles: {
    global: {
      body: {
        backgroundColor: "#090249",
        fontSize: "xl",
      },
    },
  },
  colors: {
    primary: "rebeccapurple",
  },
  components: {
    Container,
    Text,
  },
};

export default extendTheme(theme);
