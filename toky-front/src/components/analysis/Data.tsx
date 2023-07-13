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
    playDate: "2023.0908(금) 14:00",
    location: "고양 종합운동장",
  },
  {
    playDate: "2023.0908(금) 16:00",
    location: "빙구장",
  },
  {
    playDate: "2023.0908(금) 17:00",
    location: "농구장",
  },
  {
    playDate: "2023.0909(금) 14:00",
    location: "럭비장",
  },
  {
    playDate: "2023.0909(토) 14:00",
    location: "고양 종합운동장",
  },
  {
    playDate: "2023.0908(금) 야구,빙구,농구",
    location: "2023.0909(토) 축구 럭비",
  },
];

export const TIME: Date[] = [
  new Date("2023-09-08 10:30:00"),
  new Date("2023-09-08 15:30:00"),
  new Date("2023-09-08 16:30:30"),
  new Date("2023-09-09 10:30:00"),
  new Date("2023-09-09 13:30:00"),
  new Date("2023-09-09 13:30:00"),
];
export const pastMatch = [[{}, {}], []];
