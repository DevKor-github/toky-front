import { motion } from "framer-motion";
import { styled } from "styled-components";
interface Props {
  clickPointTip: () => void;
}
export default function PointTip({ clickPointTip }: Props) {
  const pointPolicy =
    "• 예측/랭킹 공유 시 매일 100p 지급\n\t(최초 1회 300p 지급)\n• 승부 예측 참여 시 항목 당 50p 지급\n• 적중시 항목 당 100p 지급";
  const policyDetail =
    "5개 맞히면 보너스 500p 지급\n4개 맞히면 보너스 300p 지급\n3개 맞히면 보너스 100p 지급";
  return (
    <PortalWrapper onClick={clickPointTip}>
      <Wrapper
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <div style={{ whiteSpace: "pre-wrap" }}>
          {pointPolicy}
          <div style={{ whiteSpace: "pre-wrap", paddingLeft: "10px" }}>
            {policyDetail}
          </div>
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
const Wrapper = styled(motion.div)`
  position: absolute;
  right: 50%;
  transform: translate(50%, 0);
  top: 170px;
  z-index: 4;
  width: 190px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.87);
  color: #1f1f1f;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.4px;
  line-height: 13px;
`;

const PointPolicy = styled.div``;
