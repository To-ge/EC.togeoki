import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1578304105668-2cea232a4995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=100")
      center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const WarnText = styled.div`
  color: red;
  font-size: 12px;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warn, setWarn] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const navigation = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      setNewUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newUser && navigation("/login", { state: { newUser } });
  }, [newUser]);

  const handleClick = (e) => {
    e.preventDefault();
    if ((username === "") | (email === "") | (password === "")) {
      setWarn(true);
    } else if (password !== confirmPassword) {
      setWarn(true);
    } else {
      handleRegister();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="ユーザーネーム"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="パスワード"
            type="password"
            onChange={(e) => setPassword(String(e.target.value))}
          />
          <Input
            placeholder="確認パスワード"
            type="password"
            onChange={(e) => setConfirmPassword(String(e.target.value))}
          />
          <Agreement>
            アカウントを作成することにより<b>プライバシーポリシー</b>
            に従って個人データが処理されることに同意します
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          {warn && <WarnText>入力に誤りがあります。</WarnText>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
