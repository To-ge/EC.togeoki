import styled from "styled-components";
import { SearchOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(246, 235, 220);
  position: relative;
  box-shadow: 0 0 10px black, inset 0 0 10px gray;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  max-width: 200px;
  z-index: 2;
  object-fit: cover;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item, cat }) => {
  const navigation = useNavigate();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <div
            onClick={() =>
              navigation(`/product/${item._id}`, { state: { cat } })
            }
          >
            <SearchOutlined />
          </div>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
