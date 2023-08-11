"use client";

import FooterBtn from "@/components/signup/FooterBtn";
import SignupComponent from "@/components/signup/signupComponent";
import TopBar from "@/components/signup/topBar";
import client from "@/lib/httpClient";
import withAuth from "@/lib/withAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type valueType = {
	school: string;
	nickname: string;
	phoneNumber: string;
	authNumber: string;
};

function Signup() {
	const [progress, setProgress] = useState<number>(0);
	const [value, setValue] = useState<valueType>({
		school: "",
		nickname: "",
		phoneNumber: "",
		authNumber: "",
	});
	const [clickable, setClickable] = useState<boolean>(false);
	const [slide, setSlide] = useState<string>("");
	const [error, setError] = useState<"nickname" | "phoneNumber" | "authNumber" | "">("");
	const [phoneErrorText, setPhoneErrorText] = useState<string>("");
	const [codeErrorText, setCodeErrorText] = useState<string>("");
	const SignupProps = [
		{ title: ["학교", "를 선택해주세요."] },
		{ title: ["닉네임", "을 입력해주세요."] },
		{ title: ["전화번호", "를 입력해주세요."] },
		{ title: ["인증번호", "를 입력해주세요."] },
		{ title: ["환영합니다.", value.nickname] },
	];
	const router = useRouter();

	useEffect(() => {
		client.get("/auth/needsignup").then((alreadySigned) => {
			if (alreadySigned.data) router.replace("/");
		});
	}, []);

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
		} else if (progress === 3) {
			if (value.authNumber.length === 6) setClickable(true);
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
				error={error}
				setError={setError}
				phoneErrorText={phoneErrorText}
				setPhoneErrorText={setPhoneErrorText}
				codeErrorText={codeErrorText}
				setCodeErrorText={setCodeErrorText}
			/>
			<FooterBtn
				value={value}
				clickable={clickable}
				setClickable={setClickable}
				progress={progress}
				handleProgress={setProgress}
				setSlide={setSlide}
				error={error}
				setError={setError}
				setPhoneErrorText={setPhoneErrorText}
				setCodeErrorText={setCodeErrorText}
			></FooterBtn>
		</div>
	);
}
export default withAuth(Signup);
export type { valueType };
