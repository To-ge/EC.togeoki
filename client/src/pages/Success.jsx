import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#e66465, #9198e5);
`;

const Comment = styled.h2``;

const Success = () => {
  const location = useLocation();

  console.log(location);
  return (
    <Container>
      <Comment>お支払い完了しました。</Comment>
    </Container>
  );
};

export default Success;
