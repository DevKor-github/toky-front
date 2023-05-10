"use client";

import styled from "styled-components";
import Image from "next/image";
import LeftArrow from "../../../public/image/leftarrow.webp";

interface TopBarProps {
    progressValue: number;
}

export default function TopBar({ progressValue }: TopBarProps) {
    return (
        <Wrapper>
            <TopBarContainer>
                <Image src={LeftArrow} alt="back" width={20} />
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
        height: 8px;
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
    }
`;

const Title = styled.h4`
    display: inline-block;
    margin-left: 128px;
`;
