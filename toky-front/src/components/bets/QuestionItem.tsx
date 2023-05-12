"use client";

import React from "react";

interface QuestionItemProps {
  itemIndex: number;
  description: string;
  choice: string[];
}
// props로 i 받고 description choices
export default function QuestionItem({
  itemIndex,
  description,
  choice,
}: QuestionItemProps){
  return (
    <div>
      {/* index 원 */}
      <h1>{description}</h1>
      {/* choices.size 보고 2이면 이거 3이면 이거 */}
      {/* 누르면 다르게 */}
    </div>
  );
};




