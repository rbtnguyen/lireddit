import { Box, Flex, Button, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg="tomato" p={4}>
      <Box ml={"auto"}>
        <NextLink href="/login">
          <Button colorScheme="black" variant="link" mr={2}>
            login
          </Button>
        </NextLink>
        <NextLink href="/register">
          <Button colorScheme="black" variant="link" mr={2}>
            register
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
};
