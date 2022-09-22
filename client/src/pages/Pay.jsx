import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51LZsW7BsLN05Ixsv8hIs94cY7dDc1zdiAPr3Lrlm0drO8F4gcwYDTJ4sYHCXrnsc5sIhpmxyQnY7qh8My5PYU9Ng00wXmGcJLR";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
`;

const PayButton = styled.button`
  height: 60px;
  width: 200px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 10px 10px 10px gray;
  cursor: pointer;
`;

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigation = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://togeoki.herokuapp.com/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigation("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigation]);

  return (
    <Container>
      {stripeToken ? (
        <span>しばらくお待ちください...</span>
      ) : (
        <StripeCheckout
          name="togeoki"
          image="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          billingAddress
          shippingAddress
          description="合計金額: 20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <PayButton>今すぐ支払う</PayButton>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Pay;
