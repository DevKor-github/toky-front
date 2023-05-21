"use client";

import styled from "styled-components";
import Image from "next/image";
import LeftArrow from "../../../public/image/leftArrow.webp";
import { useRouter } from "next/navigation";

interface TopBarProps {
    progressValue: number;
    progress: number;
    handleProgress: (num: number) => void;
    slide: string;
    setSlide: (str: string) => void;
}

export default function TopBar({
    progress,
    progressValue,
    handleProgress,
    slide,
    setSlide,
}: TopBarProps) {
    const router = useRouter();
    const handleBack = () => {
        if (progress === 0) {
            router.push("/");
        } else {
            handleProgress(progress - 1);
            setSlide(`back${progress - 1}`);
        }
    };

    return (
        <Wrapper>
            <TopBarContainer>
                <Image
                    onClick={handleBack}
                    src={LeftArrow}
                    alt="back"
                    width={20}
                />
                <Title>회원가입</Title>
            </TopBarContainer>
            <progress id="progress" value={progressValue} max={100}></progress>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-top: 20px;
    line-height: 20px;
    height: 40px;

    #progress {
        appearance: none;
        height: 5px;
        width: 100%;
    }
    #progress::-webkit-progress-bar {
        background: rgba(255, 255, 255, 0.15);
    }
    #progress::-webkit-progress-value {
        background: rgba(255, 255, 255, 0.87);
    }
`;

const TopBarContainer = styled.div`
    width: 100%;
    color: rgba(255, 255, 255, 0.87);

    display: flex;
    align-items: center;
    & img {
        margin-left: 5%;
        cursor: pointer;
    }
`;

const Title = styled.h4`
    display: block;
    width: 100%;
    font-weight: 400;
    text-align: center;
    font-size: 18px;
    position: absolute;
    color: rgba(255, 255, 255, 0.87);
`;
