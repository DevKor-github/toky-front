import { styled } from "styled-components";
import close from "../../../public/image/close.svg";
import Image from "next/image";

interface Props {
  clickPointTip: () => void;
}
export default function PointTip({ clickPointTip }: Props) {
  const pointPolicy =
    "• 가입 시 100p 지급\n • 예측/랭킹 공유 시 매일 100p 지급\n\t(최초 1회 300p 지급)\n• 승부 예측 참여 시 항목 당 50p 지급\n• 적중시 항목 당 100p 지급\n• 종목의 예측 항목 중 ";
  return (
    <PortalWrapper onClick={clickPointTip}>
      <Wrapper>
        <Image
          style={{ marginLeft: "auto", marginBottom: "4px" }}
          alt="close"
          width={10}
          src={close}
        />

        <div style={{ whiteSpace: "pre-wrap" }}>{pointPolicy}</div>
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

  width: 190px;
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
