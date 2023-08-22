import { styled } from "styled-components";

export default function ShareFooter() {
  return (
    <Footer>
      <h4>2023 정기전 승부예측 토키</h4>
      <img
        src="/image/divider.svg"
        alt="divider"
        style={{
          width: "1px",
          marginRight: "7px",
          marginLeft: "7px",
        }}
      />
      <h4>@official.toky</h4>
    </Footer>
  );
}

const Footer = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
  z-index: 1002;
  /* margin-top: 274px; */
  display: flex;
  justify-content: center;
  & h4 {
    color: var(--87, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 10px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    letter-spacing: -0.6px;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  }
`;
