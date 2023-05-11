"use client";

import SignupComponent from "@/components/signup/signupComponent";
import TopBar from "@/components/signup/topBar";
import { useState } from "react";

type valueType = {
    school: string;
};

export default function Signup() {
    const [progress, setProgress] = useState<number>(0);
    const [value, setValue] = useState<valueType>({
        school: "",
    });
    const SignupProps = [{ title: ["학교", "를 선택해주세요."] }];

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
        </div>
    );
}

export type { valueType };
