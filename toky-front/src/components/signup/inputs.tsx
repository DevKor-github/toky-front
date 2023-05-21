import { styled } from "styled-components";

interface NicknameCounterProps {
    nickname: string;
}

export const SignupInput = styled.input`
    background-color: #121212;

    color: #ffffff;
    letter-spacing: -0.04em;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    width: 90%;
    height: 50px;
    padding: 16px;
    font-weight: 700;
    font-size: 15px;

    &:active {
        border: 1px solid rgba(255, 255, 255, 0.87);
    }

    &.vibration {
        animation: vibration 0.1s;
    }

    @keyframes vibration {
        from {
            transform: translateX(3px);
        }
        to {
            transform: translateX(-3px);
        }
    }
`;

export function NicknameCounter({ nickname }: NicknameCounterProps) {
    return <p style={{ display: "inline-block" }}>{nickname?.length}/10</p>;
}

export const NicknameCheck = styled.div`
    width: 90%;
    margin-left: 36px;
    margin-top: 5px;
    color: #757575;
`;

export const SchoolBtn = styled.button<{ children: string; value: string }>`
    width: 128px;
    height: 128px;
    border-radius: 100%;
    border: none;
    font-size: 18px;
    font-weight: 500;
    background: ${(props) =>
        props.children === props.value
            ? props.children === "고려대학교"
                ? "linear-gradient(90deg, #F3233C 0%, #F95B6E 100%);"
                : "linear-gradient(90deg, #5B84FF 0%, #2948FF 100%);"
            : "#1F1F1F"};
    &:hover {
        border-width: 3px;
        border-style: solid;
        border-color: ${(props) =>
            props.children === "고려대학교" ? "crimson" : "#0123b4"};
    }
`;

export const SchoolBtnWrapper = styled.div`
    position: relative;
    width: 128px;

    margin-right: 5%;
    margin-left: 5%;
`;
