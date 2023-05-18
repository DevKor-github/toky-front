"use client";

import styled from "styled-components";
import Image from "next/image";
import LeftArrow from "../../../public/image/leftArrow.webp";
import { useRouter } from "next/navigation";

interface TopBarProps {
    progressValue: number;
    progress: number;
    handleProgress: (num: number) => void;
}

export default function TopBar({
    progress,
    progressValue,
    handleProgress,
}: TopBarProps) {
    const router = useRouter();
    const handleBack = () => {
        if (progress === 0) {
            router.push("/");
        } else {
            handleProgress(progress - 1);
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
    margin-top: 20px;
    height: 40px;

    #progress {
        appearance: none;
        height: 5px;
        width: 100%;
    }
    #progress::-webkit-progress-bar {
        background: #d9d9d9;
    }
    #progress::-webkit-progress-value {
        background: #757575;
    }
`;

const TopBarContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    & img {
        margin-left: 16px;
        cursor: pointer;
    }
`;

const Title = styled.h4`
    display: inline-block;
    margin-left: 128px;
`;
