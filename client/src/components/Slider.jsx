import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7d7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 70%;
  box-shadow: 0 0 10px black;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  text-shadow: 7px 7px lightgray;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-wight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigation = useNavigate();

  // スライドの移動
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 && slideIndex - 1);
    } else {
      setSlideIndex(slideIndex < 2 && slideIndex + 1);
    }
  };

  return (
    <Container>
      <Arrow
        style={{ opacity: slideIndex === 0 && 0 }}
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={() => navigation(`/products/${item.cat}`)}>
                SHOW NOW
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        style={{ opacity: slideIndex === 2 && 0 }}
        direction="right"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
