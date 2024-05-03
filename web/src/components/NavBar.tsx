import { Box, Flex, Button, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    // pause: isServer(),
  });
  return (
    <Flex bg="tan" p={4}>
      <Box ml={"auto"}>
        {fetching ? (
          <div>
            <NextLink href="/">
              <Button colorScheme="black" variant="link" mr={2}>
                home
              </Button>
            </NextLink>
          </div>
        ) : data?.me ? (
          <div>
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
          </div>
        ) : (
          <div>
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
          </div>
        )}
      </Box>
    </Flex>
  );
};
