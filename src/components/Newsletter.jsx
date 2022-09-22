import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: inset 0 0 100px 20px lightcoral;
  ${mobile({ height: "40vh" })}
`;
const Text = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  text-shadow: 5px 5px 5px gray;
  ${mobile({ fontSize: "50px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "18px", width: "72%", textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: 1px groove teal;
  letter-spacing: 2px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: brown;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Text>News</Text>
      <Desc>新商品の入荷の通知やおすすめ情報をお知らせします。</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
