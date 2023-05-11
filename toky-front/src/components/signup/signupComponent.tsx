import { MouseEventHandler } from "react";
import styled from "styled-components";
import type { valueType } from "../../app/signup/page";
import koreaLogo from "../../../public/image/korealogo.webp";
import yonseiLogo from "../../../public/image/yonseiLogo.webp";
import Image from "next/image";
import { SchoolBtnWrapper, SchoolBtn } from "./schoolInput";
import { NicknameCheck, NicknameCounter, NicknameInput } from "./nicknameInput";

interface SignupComponentProps {
    title: string[];
    progress: number;
    handleProgress: (num: number) => void;
    value: valueType;
    setValue: (val: any) => void;
}

export default function SignupComponent({
    title,
    progress,
    handleProgress,
    value,
    setValue,
}: SignupComponentProps) {
    const handleSchoolClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target) return;
        setValue((prev: valueType) => ({ ...prev, school: target.innerText }));
    };
    const handleNicknameChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        if (target.value.length <= 10) {
            setValue((prev: valueType) => ({
                ...prev,
                nickname: target.value,
            }));
        }
    };

    return (
        <div>
            <TitleBox>
                <b>{title[0]}</b>
                {title[1]}
            </TitleBox>
            <SelectBox>
                {progress === 0 && (
                    <div style={{ display: "flex", marginLeft: "56px" }}>
                        <SchoolBtnWrapper>
                            <SchoolBtn
                                value={value.school}
                                onClick={handleSchoolClick}
                            >
                                고려대학교
                            </SchoolBtn>
                        </SchoolBtnWrapper>
                        <SchoolBtnWrapper>
                            <SchoolBtn
                                value={value.school}
                                onClick={handleSchoolClick}
                            >
                                연세대학교
                            </SchoolBtn>
                        </SchoolBtnWrapper>
                    </div>
                )}
                {progress === 1 && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <NicknameInput
                            placeholder="닉네임"
                            onChange={handleNicknameChange}
                            value={value.nickname}
                        ></NicknameInput>
                        <NicknameCheck>
                            <NicknameCounter
                                nickname={value.nickname}
                            ></NicknameCounter>
                        </NicknameCheck>
                    </div>
                )}
            </SelectBox>
        </div>
    );
}

const TitleBox = styled.div`
    margin-top: 64px;
    margin-left: 32px;
    font-size: 22px;

    color: #757575;

    & b {
        color: #000000;
    }
`;

const SelectBox = styled.div`
    margin-top: 32px;
`;
