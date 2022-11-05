import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: white;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "20px", marginLeft: "20px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size; 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const navigation = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>JP</Language>
          <SearchContainer>
            <Input placeholder="検索" style={{ outline: "none" }} />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          {/* <a href="/" style={{ textDecoration: "none", color: "inherit" }}> */}
          <div onClick={() => navigation("/")}>
            <Logo>TOGEOKI.</Logo>
          </div>
          {/* </a> */}
        </Center>
        <Right>
          <MenuItem onClick={() => navigation("/register")}>REGISTER</MenuItem>
          <MenuItem onClick={() => navigation("/login")}>SIGN IN</MenuItem>
          <Link to={currentUser ? "/cart" : "/login"}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
