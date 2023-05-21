"use client";

import React, { useState } from "react";
import { styled } from "styled-components";

interface QuestionItemProps {
  itemIndex: number;
  description: string;
  choice: string[];
}
// props로 i 받고 description choices + style에 index랑 choice.size넣어서 구분
// 이미 저장해뒀다면 받아와야함
export default function QuestionItem({
  itemIndex,
  description,
  choice,
}: QuestionItemProps) {
  //기본 답을 밥음
  let userAnswer = 0;
  const [selectedButton, setSelectedButton] = useState<number | null>(null); // useeffect async로 유저의 기존 답변 받아올 수 있게 하기
  const [isLoding, setIsLoding] = useState(true);
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number
  ) => {
    setSelectedButton(idx);
  };

  const answerLength = choice.length;
  const answer = choice.map((choice, i) => {
    return (
      <form key={i} method="POST">
        <AnswerBtn
          type="submit"
          index={i}
          onClick={(e) => handleButtonClick(e, i)}
          selected={selectedButton}
          length={answerLength}
        >
          {choice}
        </AnswerBtn>
      </form>
    );
  });
  return (
    <QuestionContainer>
      {/* index 원 */}
      <QuestionInfo>
        <QuestionIndex>{itemIndex + 1}</QuestionIndex>
        {description}
      </QuestionInfo>
      <AnswerContainer>{answer}</AnswerContainer>

      {/* choices.size 보고 2이면 이거 3이면 이거 */}
      {/* 누르면 다르게 */}
    </QuestionContainer>
  );
}

const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AnswerBtn = styled.button<{
  index: number;
  length: number;
  selected: number | null;
}>`
  border: 0;
  width: 175px;
  height: 67px;
  ${(props) => {
    //선택지 2개인 경우
    if (props.length === 2) {
      if (props.selected === null) {
        //아무것도 선택안됨
        return props.index === 0
          ? `background: #323232; border-radius: 7px 0px 0px 7px; color: white; border-right: solid; border-color: #222222;`
          : `background: #323232; border-radius: 0px 7px 7px 0px; color: white`;
      }
      //왼쪽
      if (props.index === 0) {
        //본인 인덱스 선택됨
        if (props.selected === props.index) {
          return `background: linear-gradient(90deg, #f3233c 0%, rgba(243, 35, 60, 0.25) 100%);
        box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.25); border-radius: 7px 0px 0px 7px; color : white`;
        }
        //본인 인덱스 선택 안됨
        else {
          return `background: #181818; border-radius: 7px 0px 0px 7px; color: rgba(255, 255, 255, 0.15);`;
        }
      }
      //오른쪽
      else {
        if (props.selected == props.index) {
          return `background: linear-gradient(90deg, rgba(41, 72, 255, 0.25) 0%, #2948FF 100%); 
        box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.25); border-radius: 0px 7px 7px 0px; color : white`;
        } else {
          return `background: #181818; border-radius: 0px 7px 7px 0px; color: rgba(255, 255, 255, 0.15);`;
        }
      }
    }

    // 선택지 3개인 경우
    else {
      if (props.index === 0) {
        return `  background: linear-gradient(90deg, #f3233c 0%, rgba(243, 35, 60, 0.25) 100%);
        box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25); border-radius: 7px 0px 0px 7px; color : white`;
      } else if (props.index == 2) {
        return `background: linear-gradient(90deg, rgba(41, 72, 255, 0.25) 0%, #2948FF 100%); 
        box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.25); border-radius: 0px 7px 7px 0px; color : white`;
      }
    }
  }}
`;

const QuestionIndex = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #353535;
  color: rgba(255, 255, 255, 0.6);
  border: none;
  font-size: 9px;
  text-align: center;
  letter-spacing: -0.06em;
  margin-left: 29px;
  margin-right: 10px;
`;

const QuestionInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 10px;
`;

const QuestionContainer = styled.div`
  margin-top: 30px;
`;