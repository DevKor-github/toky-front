import React from "react";
import QuestionItem from "./QuestionItem";

// match type으로 backend에 쏘고 getBetQuestions(match: Match) 받아서
interface QuestionListProps {
  questions: {
    description: string;
    choice: string[];
  }[];
}

export default function QuestionList({ questions }: QuestionListProps) : JSX.Element{
	const questionList = questions.map((question, itemIndex) =>{
		return (
			<QuestionItem
          key={itemIndex}
					itemIndex = {itemIndex}
          description={question.description}
          choice={question.choice}
        />
		)
	})


  return (
    <div>
      {questionList}
    </div>
  );


}
