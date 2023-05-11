import { useState } from "react";
import styled from "styled-components";
import type { valueType } from "../../app/signup/page";

interface FooterBtnProps {
    value: valueType;
    progress: number;
    handleProgress: (num: number) => void;
    clickable: boolean;
    setClickable: (bool: boolean) => void;
}

export default function FooterBtn({
    value,
    progress,
    handleProgress,
    clickable,
    setClickable,
}: FooterBtnProps) {
    const handleNextClick = () => {
        if (progress === 0 && value.school !== "") {
            handleProgress(progress + 1);
            setClickable(false);
        }
    };

    return (
        <Button onClick={handleNextClick} clickable={clickable}>
            다음
        </Button>
    );
}

const Button = styled.button<{ clickable: boolean }>`
    position: fixed;
    bottom: 20px;
    border: none;

    color: white;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;

    background-color: ${(props) => (props.clickable ? "blue" : "#d9d9d9")};
    width: 100%;
    max-width: 395px;
    height: 80px;
`;
