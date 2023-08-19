import html2canvas from "html2canvas";
import React, { Dispatch, SetStateAction } from "react";

export interface IShareFunc {
  imgRef: React.RefObject<HTMLDivElement>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  mode: number;
}
export const downloadImage = async ({
  imgRef: ref,
  setIsLoading,
  mode,
}: IShareFunc) => {
  if (ref.current === null) return;
  const name = mode === 0 ? "my-prediction" : "my-rank";
  setIsLoading(true);

  const canvas = await html2canvas(ref.current, {
    allowTaint: true,
    removeContainer: true,
    useCORS: true,
    scale: 4,
    imageTimeout: 15000,
  });
  const imgUrl = canvas.toDataURL("image/png", 1.0);
  fakelinkDownload(imgUrl, `${name}`);
  setIsLoading(false);
};
export const fakelinkDownload = (blob: string, fileName: string) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.download = fileName;
  fakeLink.href = blob;
  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
  fakeLink.remove();
};

export const shareImage = async ({ imgRef: ref, mode }: IShareFunc) => {
  const name = mode === 0 ? "my-prediction" : "my-rank";
  if (ref.current === null) return;
  const canvas = await html2canvas(ref.current, {
    allowTaint: true,
    removeContainer: true,
    useCORS: true,
    scale: 4,
    imageTimeout: 15000,
  });
  const imgUrl = canvas.toDataURL("image/png", 1.0);
  const blob = await (await fetch(imgUrl)).blob();

  const filesArray = [
    new File([blob], `${name}`, {
      type: "image/png",
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  if (navigator.canShare && navigator.canShare(shareData)) {
    await navigator.share(shareData);
  } else {
    alert("지원되지 않는 브라우저입니다. 모바일 크롬으로 접속해주세요!");
  }
};
