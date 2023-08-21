import { styled } from "styled-components";
import close from "../../../public/image/close.svg";
import Image from "next/image";

interface Props {
  clickPointTip: () => void;
}
export default function PointTip({ clickPointTip }: Props) {
  return (
    <PortalWrapper onClick={clickPointTip}>
      <Wrapper>
        <Image
          style={{ marginLeft: "auto", marginBottom: "4px" }}
          alt="close"
          width={10}
          src={close}
        />

        <div>
          • 가입 시 100p
          <br />
          • 예측/랭킹 공유 시 매일 100p (최초 300p)
          <br />
          • 승부예측 참여 시 종목 당 50
          <br />• 적중시 항목당 100p
          <br />• 종목 하나 5개 다 맞히면 보너스 500p
        </div>
      </Wrapper>
    </PortalWrapper>
  );
}
const PortalWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background: transparent;
`;
const Wrapper = styled.div`
  position: absolute;
  right: 15%;
  top: 160px;
  z-index: 4;

  width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.87);
  color: #1f1f1f;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;

const PointPolicy = styled.div``;
