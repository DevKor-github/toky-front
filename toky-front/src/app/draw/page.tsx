"use client";
import TopBar from "@/components/common/TopBar";
import UserPoint from "@/components/draw/UserPoint";
import DrawGift from "@/components/draw/DrawGift";
import Policy from "@/components/draw/Policy";

export default function Draw() {
  return (
    <>
      <TopBar title="내 포인트" />
      <UserPoint />
      <DrawGift />
      <Policy />
    </>
  );
}
