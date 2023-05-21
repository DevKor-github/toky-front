import styled from "styled-components";
import type { valueType } from "../../app/signup/page";

interface FooterBtnProps {
    value: valueType;
    progress: number;
    handleProgress: (num: number) => void;
    clickable: boolean;
    setClickable: (bool: boolean) => void;
    setSlide: (str: string) => void;
    error: string;
    setError: (str: "nickname" | "phoneNumber" | "authNumber" | "") => void;
}

export default function FooterBtn({
    value,
    progress,
    handleProgress,
    clickable,
    setClickable,
    setSlide,
    error,
    setError,
}: FooterBtnProps) {
    async function handleNextClick() {
        if (progress === 0 && value.school !== "") {
            setSlide(`slide${progress}`);
            setClickable(false);

            setTimeout(() => {
                handleProgress(progress + 1);
            }, 100);
        } else if (progress === 1 && value.nickname !== "") {
            const res = await fetch("/api/signup/nickname", {
                method: "POST",
                body: JSON.stringify({ nickname: value.nickname }),
            });

            if (res.status === 200) {
                setSlide(`slide${progress}`);
                setClickable(false);
                setTimeout(() => {
                    handleProgress(progress + 1);
                }, 100);
                setError("");
            } else {
                setError("nickname");
            }
        } else if (progress === 2 && value.phoneNumber.length >= 10) {
            setSlide(`slide${progress}`);
            setClickable(false);
            setTimeout(() => {
                handleProgress(progress + 1);
            }, 100);
        } else if (progress === 3 && value.authNumber.length === 6) {
            setSlide(`slide${progress}`);
            setClickable(false);
            setTimeout(() => {
                handleProgress(progress + 1);
            }, 100);
        }
    }

    return (
        <Button
            onClick={handleNextClick}
            clickable={clickable ? "true" : "false"}
        >
            다음
        </Button>
    );
}

const Button = styled.button<{ clickable: string }>`
    position: fixed;
    bottom: 0px;
    border: none;

    color: ${(props) =>
        props.clickable === "true"
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0.15)"};
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;

    cursor: ${(props) => (props.clickable === "true" ? "pointer" : "auto")};

    background-color: #1f1f1f;
    width: 100%;
    height: 80px;
`;
