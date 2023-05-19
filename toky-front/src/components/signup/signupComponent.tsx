import styled from "styled-components";
import type { valueType } from "../../app/signup/page";

import {
    SchoolBtnWrapper,
    SchoolBtn,
    NicknameCheck,
    NicknameCounter,
    SignupInput,
} from "./inputs";

interface SignupComponentProps {
    title: string[];
    progress: number;
    handleProgress: (num: number) => void;
    value: valueType;
    setValue: (val: any) => void;
    slide: string;
    error: "nickname" | "phoneNumber" | "authNumber" | "";
    setError: (str: "nickname" | "phoneNumber" | "authNumber" | "") => void;
}

export default function SignupComponent({
    title,
    progress,
    handleProgress,
    value,
    setValue,
    slide,
    error,
    setError,
}: SignupComponentProps) {
    // 학교 선택시 값 변경
    const handleSchoolClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target) return;
        setValue((prev: valueType) => ({ ...prev, school: target.innerText }));
    };

    // 닉네임 입력시 값 변경, 닉네임 10자 이하로 제한
    const handleNicknameChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        if (target.value.length > 10) {
            target.classList.add("vibration");
            target.value = target.value.slice(0, 10);

            setTimeout(() => {
                target.classList.remove("vibration");
            }, 1000);
        }
        if (error === "nickname") setError("");

        setValue((prev: valueType) => ({
            ...prev,
            nickname: target.value,
        }));
    };

    const handlePhoneChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        target.value = target.value
            .replace(/[^0-9]/g, "")
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        setValue((prev: valueType) => ({
            ...prev,
            phoneNumber: target.value,
        }));
    };

    const handleAuthChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;

        if (target.value.length > 6) {
            target.value = target.value.slice(0, 6);
        }

        setValue((prev: valueType) => ({
            ...prev,
            authNumber: target.value,
        }));
    };

    return (
        <div>
            {progress === 0 && (
                <SchoolStage className={slide}>
                    <TitleBox>
                        <b>{title[0]}</b>
                        {title[1]}
                    </TitleBox>
                    <SelectBox>
                        <SlideWrapper>
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
                        </SlideWrapper>
                    </SelectBox>
                </SchoolStage>
            )}
            {progress === 1 && (
                <NicknameStage className={slide}>
                    <TitleBox>
                        <MiniText>나중에 수정 가능해요!</MiniText>
                        <b>{title[0]}</b>
                        {title[1]}
                    </TitleBox>
                    <SelectBox>
                        <InputWrapper>
                            <SignupInput
                                placeholder="닉네임"
                                onChange={handleNicknameChange}
                                value={value.nickname}
                                type={"text"}
                            ></SignupInput>
                            <NicknameCheck>
                                <NicknameCounter
                                    nickname={value.nickname}
                                ></NicknameCounter>
                                {error === "nickname" && (
                                    <ErrorText>
                                        이미 존재하는 닉네임입니다.
                                    </ErrorText>
                                )}
                            </NicknameCheck>
                        </InputWrapper>
                    </SelectBox>
                </NicknameStage>
            )}
            {progress === 2 && (
                <PhoneStage className={slide}>
                    <TitleBox>
                        <b>{title[0]}</b>
                        {title[1]}
                    </TitleBox>
                    <SelectBox>
                        <InputWrapper>
                            <SignupInput
                                placeholder="전화번호"
                                type="tel"
                                onChange={handlePhoneChange}
                                value={value.phoneNumber}
                                maxLength={13}
                            ></SignupInput>
                            {error === "phoneNumber" && (
                                <ErrorText
                                    style={{
                                        marginLeft: "200px",
                                        marginTop: "12px",
                                    }}
                                >
                                    이미 사용 중인 전화번호입니다.
                                </ErrorText>
                            )}
                        </InputWrapper>
                    </SelectBox>
                </PhoneStage>
            )}
            {progress === 3 && (
                <AuthStage className={slide}>
                    <TitleBox>
                        문자로 도착한
                        <br />
                        <b>{title[0]}</b>
                        {title[1]}
                    </TitleBox>
                    <SelectBox>
                        <InputWrapper>
                            <SignupInput
                                placeholder="인증번호"
                                type="number"
                                onChange={handleAuthChange}
                                value={value.authNumber}
                                maxLength={6}
                            ></SignupInput>
                            {error === "authNumber" && (
                                <ErrorText
                                    style={{
                                        marginLeft: "200px",
                                        marginTop: "12px",
                                    }}
                                >
                                    인증번호가 일치하지 않습니다.
                                </ErrorText>
                            )}
                        </InputWrapper>
                    </SelectBox>
                </AuthStage>
            )}
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

const ErrorText = styled.p`
    color: #ff5555;
    margin-left: 150px;
    display: inline-block;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: -0.04em;

    animation: vibration 0.2s;
    @keyframes vibration {
        from {
            transform: translateX(2px);
        }
        to {
            transform: translateX(-2px);
        }
    }
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const SlideWrapper = styled.div`
    display: flex;
    margin-left: 56px;
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

const SchoolStage = styled.div`
    &.slide0 {
        animation: slideFrom 0.15s ease-out;
    }

    &.back0 {
        animation: slideBack 0.15s ease-out;
    }

    @keyframes slideFrom {
        from {
        }
        to {
            transform: translateX(-300px);
        }
    }

    @keyframes slideBack {
        from {
            transform: translateX(-300px);
        }
        to {
            transform: translateX(0px);
        }
    }
`;
const NicknameStage = styled.div`
    &.slide0 {
        animation: slideTo 0.15s ease-out;
    }

    &.slide1 {
        animation: slideFrom 0.3s ease-out;
    }

    &.back1 {
        animation: slideBack 0.15s ease-out;
    }

    @keyframes slideTo {
        from {
            transform: translateX(100px);
        }
        to {
            transform: translateX(0px);
        }
    }
`;
const PhoneStage = styled.div`
    &.slide1 {
        animation: slideTo 0.15s ease-out;
    }

    &.slide2 {
        animation: slideFrom 0.3s ease-out;
    }

    &.back2 {
        animation: slideBack 0.15s ease-out;
    }
`;

const AuthStage = styled.div`
    &.slide2 {
        animation: slideTo 0.15s ease-out;
    }

    &.slide3 {
        animation: slideFrom 0.3s ease-out;
    }

    &.back3 {
        animation: slideBack 0.15s ease-out;
    }
`;
