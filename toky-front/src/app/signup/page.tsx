"use client";

import FooterBtn from "@/components/signup/FooterBtn";
import SignupComponent from "@/components/signup/signupComponent";
import TopBar from "@/components/signup/topBar";
import { useEffect, useState } from "react";

type valueType = {
    school: string;
};

export default function Signup() {
    const [progress, setProgress] = useState<number>(0);
    const [value, setValue] = useState<valueType>({
        school: "",
    });
    const [clickable, setClickable] = useState<boolean>(false);

    const SignupProps = [{ title: ["학교", "를 선택해주세요."] }];

    useEffect(() => {
        if (progress === 0 && value.school !== "") {
            setClickable(true);
        }
    }, [value]);

    return (
        <div>
            <TopBar
                handleProgress={setProgress}
                progress={progress}
                progressValue={(progress + 1) * 25}
            />
            <SignupComponent
                title={SignupProps[progress].title}
                progress={progress}
                handleProgress={setProgress}
                value={value}
                setValue={setValue}
            />
            <FooterBtn
                value={value}
                clickable={clickable}
                setClickable={setClickable}
                progress={progress}
                handleProgress={setProgress}
            ></FooterBtn>
        </div>
    );
}

export type { valueType };
