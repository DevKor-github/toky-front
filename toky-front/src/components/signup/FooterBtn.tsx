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
        } else if (progress === 1 && value.nickname !== "") {
            handleProgress(progress + 1);
            setClickable(false);
        } else if (progress === 2 && value.phoneNumber.length >= 10) {
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
    bottom: 0px;
    border: none;

    color: ${(props) =>
        props.clickable ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.15)"};
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;

    cursor: ${(props) => (props.clickable ? "pointer" : "auto")};

    background-color: #1f1f1f;
    width: 390px;
    height: 80px;
`;
