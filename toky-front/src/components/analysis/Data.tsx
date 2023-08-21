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

export const PLAYER: playerInfo[][] = [
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
interface scheduleInfo {
  playDate: string;
  location?: string;
}
export const SCHEDULE: scheduleInfo[] = [
  {
    playDate: "2023.09.08(금)",
    location: "목동 야구장",
  },
  {
    playDate: "2023.09.08(금)",
    location: "목동 아이스링크장",
  },
  {
    playDate: "2023.09.08(금)",
    location: "고양 실내체육관",
  },
  {
    playDate: "2023.09.09(금)",
    location: "고양 종합운동장",
  },
  {
    playDate: "2023.09.09(토)",
    location: "고양 종합운동장",
  },
  {
    playDate: "",
    location: "",
  },
];

export const TIME: Date[] = [
  new Date("2023-09-08 11:00:00"),
  new Date("2023-09-08 15:30:00"),
  new Date("2023-09-08 16:30:30"),
  new Date("2023-09-09 10:30:00"),
  new Date("2023-09-09 13:30:00"),
  new Date("2023-09-09 13:30:00"),
];

interface pastMatchInfo {
  score: string;
  date: string;
  leagueName: string;
  result: number; // 0 고대 승, 1 연대 승
}
export const pastMatch: pastMatchInfo[][] = [
  [
    {
      score: "6 : 5",
      date: "2023년 08월 05일",
      leagueName: "제 57회 대통령기 전국대학야구대회 준결승전",
      result: 0,
    },
    {
      score: "2 : 8",
      date: "2022년 10월 28일",
      leagueName: "2022 정기전 야구",
      result: 1,
    },
  ],
  [
    {
      score: "1 : 3",
      date: "2022년 11월 14일",
      leagueName: "KUSF 대학 아이스하키 U리그",
      result: 1,
    },
    {
      score: "4 : 1",
      date: "2022년 10월 28일",
      leagueName: "2022 정기전 빙구",
      result: 0,
    },
  ],
  [
    {
      score: "69 : 58",
      date: "2023년 07월 20일",
      leagueName: "제 39회 MBC배 전국대학농구대회 결승전",
      result: 0,
    },
    {
      score: "62 : 45",
      date: "2023년 05월 25일",
      leagueName: "KUSF 대학 농구 U리그",
      result: 0,
    },
  ],
  [
    {
      score: "49 : 5",
      date: "2023년 07월 26일",
      leagueName: "제 34회 대통령기 전국 종별럭비선수권대회",
      result: 0,
    },
    {
      score: "43 : 15",
      date: "2023년 04월 08일",
      leagueName: "코리아 슈퍼럭비리그 1차리그",
      result: 0,
    },
  ],
  [
    {
      score: "1 : 2",
      date: "2023년 06월 16일",
      leagueName: "KUSF 대학 축구 U리그",
      result: 1,
    },
    {
      score: "1 : 0",
      date: "2023년 03월 31일",
      leagueName: "KUSF 대학 축구 U리그",
      result: 0,
    },
  ],
];
