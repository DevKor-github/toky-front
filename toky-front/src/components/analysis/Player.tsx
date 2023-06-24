export interface playerInfo {
  image: string;
  nickname: string;
  name: string;
  department: string;
  description: string;
  position: string;
  physicalSpec: string;
  backnumber: number;
  stat: string;
  isKorea: boolean;
}

export const players: playerInfo[][] = [
  [
    {
      image: "/image/Logo.webp",
      nickname: "고대 슛돌이",
      name: "아야어",
      department: "체육교육학과21",
      description: "두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션",

      position: "FW",
      physicalSpec: "178/70",
      backnumber: 8,
      stat: "2골 3도움",
      isKorea: true,
    },
    {
      image: "/image/Logo.webp",
      nickname: "연대 슛돌이",
      name: "아야어",
      department: "체육교육학과21",
      description: "두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션",

      position: "DF",
      physicalSpec: "178/70",
      backnumber: 8,
      stat: "2골 3도움",
      isKorea: false,
    },
  ],
  [
    {
      image: "/image/Logo.webp",

      nickname: "고대 홈런왕",
      name: "아야어",
      department: "체육교육학과21",
      description: "두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션",

      position: "우익수",
      physicalSpec: "178/70",
      backnumber: 8,
      stat: "23홈런",
      isKorea: true,
    },
    {
      image: "/image/Logo.webp",
      nickname: "연대 도루왕",
      name: "아야어",
      department: "체육교육학과21",
      description: "두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션",

      position: "2루수",
      physicalSpec: "178/70",
      backnumber: 8,
      stat: "23도루",
      isKorea: false,
    },
  ],
];
