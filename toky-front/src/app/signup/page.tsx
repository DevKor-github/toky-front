"use client";

import FooterBtn from "@/components/signup/FooterBtn";
import SignupComponent from "@/components/signup/signupComponent";
import TopBar from "@/components/signup/topBar";
import { useEffect, useState } from "react";

type valueType = {
    school: string;
    nickname: string;
    phoneNumber: string;
};

export default function Signup() {
    const [progress, setProgress] = useState<number>(0);
    const [value, setValue] = useState<valueType>({
        school: "",
        nickname: "",
        phoneNumber: "",
    });
    const [clickable, setClickable] = useState<boolean>(false);
    const [slide, setSlide] = useState<string>("");

    const SignupProps = [
        { title: ["학교", "를 선택해주세요."] },
        { title: ["닉네임", "을 입력해주세요."] },
        { title: ["전화번호", "를 입력해주세요."] },
    ];

    useEffect(() => {
        if (progress === 0) {
            if (value.school !== "") setClickable(true);
            else setClickable(false);
        } else if (progress === 1) {
            if (value.nickname !== "") setClickable(true);
            else setClickable(false);
        } else if (progress === 2) {
            if (value.phoneNumber.length >= 12) setClickable(true);
            else setClickable(false);
        }
    }, [value, progress]);

    return (
        <div>
            <TopBar
                handleProgress={setProgress}
                progress={progress}
                progressValue={(progress + 1) * 25}
                slide={slide}
                setSlide={setSlide}
            />
            <SignupComponent
                title={SignupProps[progress].title}
                progress={progress}
                handleProgress={setProgress}
                value={value}
                setValue={setValue}
                slide={slide}
            />
            <FooterBtn
                value={value}
                clickable={clickable}
                setClickable={setClickable}
                progress={progress}
                handleProgress={setProgress}
                setSlide={setSlide}
            ></FooterBtn>
        </div>
    );
}

export type { valueType };
