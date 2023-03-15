import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Avatar } from "@chakra-ui/react";
import logo from "../imgs/TokenLease.png";

function Nav() {
  return (
    <Box
      bg="brand.100"
      display="flex"
      justifyContent={"space-between"}
      height={14}
      alignItems="center"
    >
      <Image
        src={logo}
        height={"100px"}
        width={"120px"}
        marginLeft={12}
      ></Image>
      <Box
        display="flex"
        justifyContent={"space-evenly"}
        width="500px"
        color={"white"}
      >
        <Link to={"/lending"}>
          <div>Lend</div>
        </Link>
        <Link to={"/lending"}>
          <div>Lend</div>
        </Link>
        <Link to={"/abput"}>
          <div>About</div>
        </Link>
        <Link to={"profile"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="xs"
          />
        </Link>
      </Box>
    </Box>
  );
}

export default Nav;
