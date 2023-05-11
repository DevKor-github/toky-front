import { MouseEventHandler } from "react";
import styled from "styled-components";
import type { valueType } from "../../app/signup/page";
import koreaLogo from "../../../public/image/korealogo.webp";
import yonseiLogo from "../../../public/image/yonseiLogo.webp";
import Image from "next/image";

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
    return (
        <div>
            <TitleBox>
                <b>{title[0]}</b>
                {title[1]}
            </TitleBox>
            <SelectBox>
                {progress === 0 && (
                    <div style={{ display: "flex" }}>
                        <SchoolBtnWrapper>
                            <SchoolBtn
                                value={value.school}
                                onClick={handleSchoolClick}
                            >
                                고려대학교
                            </SchoolBtn>
                            {value.school === "고려대학교" && (
                                <Image
                                    src={koreaLogo}
                                    alt="고려대학교 로고"
                                    fill
                                />
                            )}
                        </SchoolBtnWrapper>
                        <SchoolBtnWrapper>
                            <SchoolBtn
                                value={value.school}
                                onClick={handleSchoolClick}
                            >
                                연세대학교
                            </SchoolBtn>
                            {value.school === "연세대학교" && (
                                <Image
                                    src={yonseiLogo}
                                    alt="연세대학교 로고"
                                    fill
                                />
                            )}
                        </SchoolBtnWrapper>
                    </div>
                )}
            </SelectBox>
        </div>
    );
}

const TitleBox = styled.div`
    margin-top: 64px;
    margin-left: 32px;

    color: #757575;

    & b {
        color: #000000;
    }
`;

const SelectBox = styled.div`
    margin-top: 32px;
    margin-left: 56px;
`;

const SchoolBtn = styled.button<{ children: string; value: string }>`
    background-color: #d9d9d9;
    width: 128px;
    height: 128px;
    border-radius: 100%;
    border: none;
    font-size: ${(props) => (props.value === props.children ? "0px" : "18px")};
    font-weight: 500;

    background-color: ${(props) =>
        props.value === props.children ? "white" : ""};

    &:hover {
        border-width: 3px;
        border-style: solid;
        border-color: ${(props) =>
            props.children === "고려대학교" ? "crimson" : "#0123b4"};
    }
`;

const SchoolBtnWrapper = styled.div`
    position: relative;
    width: 128px;
    margin-right: 24px;

    & img {
        border-radius: 100%;

        object-fit: fill;
        object-position: center;
    }
`;
