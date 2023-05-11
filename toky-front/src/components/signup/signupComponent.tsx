import styled from "styled-components";
import type { valueType } from "../../app/signup/page";

import {
    SchoolBtnWrapper,
    SchoolBtn,
    NicknameCheck,
    NicknameCounter,
    SignupInput,
} from "./inputs";
import { useEffect } from "react";

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

        if (target.value.length > 10) {
            target.value = target.value.slice(0, 10);
        }

        setValue((prev: valueType) => ({
            ...prev,
            nickname: target.value,
        }));
    };
    const handlePhoneChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;

        target.value = target.value
            .replace(/[^0-9]/g, "")
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
            .replace(/(\-{1,2})$/g, "");
        setValue((prev: valueType) => ({
            ...prev,
            phoneNumber: target.value,
        }));
    };

    return (
        <div>
            <TitleBox>
                {progress === 1 && <MiniText>나중에 수정 가능해요!</MiniText>}
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
                    <InputWrapper>
                        <SignupInput
                            placeholder="닉네임"
                            onChange={handleNicknameChange}
                            value={value.nickname}
                            type={"text"}
                            maxLength={10}
                        ></SignupInput>
                        <NicknameCheck>
                            <NicknameCounter
                                nickname={value.nickname}
                            ></NicknameCounter>
                        </NicknameCheck>
                    </InputWrapper>
                )}
                {progress === 2 && (
                    <InputWrapper>
                        <SignupInput
                            placeholder="전화번호"
                            type="tel"
                            onChange={handlePhoneChange}
                            value={value.phoneNumber}
                            maxLength={13}
                        ></SignupInput>
                    </InputWrapper>
                )}
            </SelectBox>
        </div>
    );
}

const TitleBox = styled.div`
    margin-top: 64px;
    margin-left: 32px;
    font-size: 22px;

    color: rgba(255, 255, 255, 0.6);

    & b {
        color: #ffffff;
        opacity: none;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const MiniText = styled.p`
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.04em;
    color: rgba(255, 255, 255, 0.6);
`;

const SelectBox = styled.div`
    margin-top: 32px;
`;
