"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Space } from "../common/Space";
import GiftItem from "./GiftItem";
import DrawModal from "./DrawModal";
import { IDrawCount } from "@/app/draw/page";
import client from "@/lib/httpClient";
interface DrawGiftProps {
	remainingPoint: number;
	allDrawParticipants: Array<IDrawCount>;
	myDrawParticipants: Array<IDrawCount>;
}
export default function DrawGift({
	remainingPoint,
	allDrawParticipants,
	myDrawParticipants,
}: DrawGiftProps) {
	const [pointUse, setPointUse] = useState<number>(0);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [gift, setGift] = useState<Array<gift>>([]);

	const totalDraw = [0, 0, 0, 0, 0];
	const myDraw = [0, 0, 0, 0, 0];
	allDrawParticipants.map((c) => {
		totalDraw[c.giftId - 1] = c.drawCount;
	});
	myDrawParticipants.map((c) => {
		myDraw[c.giftId - 1] = c.drawCount;
	});
	const fetchGifts = async () => {
		try {
			const res = await client.get("/points/gifts");
			setGift(
				res.data.map((d: any) => {
					return {
						id: d.id,
						title: d.name,
						point: d.requiredPoint,
						img: d.photoUrl,
						type: getTypeFromPoint(d.requiredPoint),
					};
				})
			);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchGifts();
	}, []);

	const checkDrawPossible = (point: number) => {
		if (remainingPoint - pointUse - point < 0) return false;
		return true;
	};

	const addPointUse = (point: number) => {
		setPointUse((pointUse) => pointUse + point);
	};

	const onClickDraw = () => {
		setModalOpen(true);
	};

	return (
		<>
			<Wrapper>
				<span className="title">경품 응모하기</span>
				<Space h={11} />
				<div className="description">- 포인트를 사용해서 원하는 상품에 응모할 수 있습니다.</div>
				<div className="description">
					- 당첨자 발표는 2023년 9월 30일 문자를 통해 개별 공지됩니다.
				</div>
				<Space h={21} />
				<Flex>
					{gift.map((gift, idx) => (
						<GiftItem
							key={idx}
							{...gift}
							totalDraw={totalDraw[idx]}
							userDraw={myDraw[idx]}
							addPointUse={addPointUse}
							checkDrawPossible={checkDrawPossible}
						/>
					))}
				</Flex>
				<Space h={20} />
				<Flex style={{ justifyContent: "space-between", alignContent: "center" }}>
					<span className="point">응모 시 잔여 포인트</span>
					<span className="point" style={{ fontSize: 20 }}>
						{remainingPoint - pointUse}p
					</span>
				</Flex>
				<Space h={8} />
				<Divider />
				<Space h={8} />
				<Flex style={{ justifyContent: "space-between", alignContent: "center" }}>
					<span className="point" style={{ color: "#ffffff" }}>
						사용 포인트
					</span>
					<span className="point" style={{ fontSize: 20, color: "#ffffff" }}>
						{pointUse}p
					</span>
				</Flex>
				<Space h={11} />
				<DrawButton onClick={onClickDraw}>응모하기</DrawButton>
			</Wrapper>
			{modalOpen && <DrawModal closeModal={() => setModalOpen(false)} />}
		</>
	);
}

const Wrapper = styled.div`
	padding: 24px 20px 34px 20px;
	background: #222222;

	.title {
		color: rgba(255, 255, 255, 0.87);
		font-family: Spoqa Han Sans Neo;
		font-size: 20px;
		font-weight: 700;
		letter-spacing: -0.8px;
	}

	.description {
		color: rgba(255, 255, 255, 0.6);
		font-family: Spoqa Han Sans Neo;
		font-size: 10px;
		font-weight: 400;
		letter-spacing: -0.4px;
	}

	.point {
		color: rgba(255, 255, 255, 0.38);
		font-family: Spoqa Han Sans Neo;
		font-size: 13px;
		font-weight: 500;
	}
`;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
`;

const Divider = styled.div`
	width: 100%;
	height: 0.5px;
	background-color: rgba(255, 255, 255, 0.15);
`;

const DrawButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 46px;
	border-radius: 4px;
	background: #4c0eb0;

	color: #ffffff;
	font-family: Spoqa Han Sans Neo;
	font-size: 16px;
	letter-spacing: -0.96px;
`;

const getTypeFromPoint = (point: number) => {
	if (point >= 300) return 1;
	else if (point > 100) return 2;
	else return 3;
};

interface gift {
	id: number;
	title: string;
	point: number;
	img: string;
	type: 1 | 2 | 3;
}
