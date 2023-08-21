"use client";
import NavigationBar from "@/components/common/NavigationBar";
import RankingInfo from "@/components/ranking/RankingInfo";
import SearchBar from "@/components/ranking/SearchBar";
import { useContext, useEffect, useRef, useState } from "react";
import { RankingItemT } from "@/components/ranking/RankingInfo";
import client from "@/lib/httpClient";
import PageTransitionWrapper from "@/components/common/PageTransition";
import ModalPortal from "@/components/common/ModalPortal";
import ShareRank from "@/components/share/ShareRank";
import CommonModal from "@/components/common/CommonModal";
import AuthContext from "@/components/common/AuthContext";

export default function Ranking() {
  const authCtx = useContext(AuthContext);

  // 최초 로드 및 match 변경 시 -> 질문 가져오기
  useEffect(() => {
    if (authCtx.nickname === "") {
      client
        .get("/auth/profile")
        .then((res) => res.data)
        .then((user) => {
          authCtx.setNickname(user.name);
          const uni = user.university === 0 ? "고려대학교" : "연세대학교";
          authCtx.setUniv(uni);
          authCtx.setScore(user.score);
          authCtx.setRemain(user.remain);
          authCtx.setPhoneNum(user.phoneNumber);
        })
        .catch((err) => {
          window.location.href = "/login";
        });
    }
  }, []);

  const [topPage, setTopPage] = useState(1);
  const [bottomPage, setBottomPage] = useState(1);

  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  // 여기에 하이라이팅
  const [myRank, setMyRank] = useState(-1);

  const [rankInfoList, setRankInfoList] = useState<RankingItemT[]>([]);
  const [showRankModal, setShowRankModal] = useState(false);

  const [showRankShareModal, setShowRankShareModal] = useState(false);
  const [rankShareModalText, setRankShareModalText] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (!showRankModal && clicked) {
      if (
        !localStorage.getItem("rank") ||
        new Date(localStorage.getItem("rank")!).getTime() <=
          new Date().getTime() - 24 * 60 * 60 * 1000
      ) {
        client
          .get("/points/share/rank")
          .then((res) => res.data)
          .then((data) => {
            if (data === 300) {
              setShowRankShareModal(true);
              setRankShareModalText("최초 랭킹 공유로 300P 지급!");
              authCtx.setRemain(authCtx.remain + 300);
              authCtx.setScore(authCtx.score + 300);
              setTimeout(() => {
                setShowRankShareModal(false);
                setRankShareModalText("");
              }, 2000);
            } else if (data === 100) {
              setShowRankShareModal(true);
              setRankShareModalText("랭킹 공유로 100P 지급!");
              authCtx.setRemain(authCtx.remain + 100);
              authCtx.setScore(authCtx.score + 100);
              setTimeout(() => {
                setShowRankShareModal(false);
                setRankShareModalText("");
              }, 2000);
            }
            localStorage.setItem("rank", new Date().toString());
          });
      }
    }
  }, [showRankModal]);

  const scrollRef = useRef<HTMLDivElement>(null);
  function clickRankModal() {
    setShowRankModal(!showRankModal);
    setClicked(true);
  }
  useEffect(() => {
    const divElement = scrollRef.current;
    if (divElement) {
      const fetchByScrollValue = async () => {
        if (scrollRef.current && !isLoading) {
          setIsLoading(true);
          const top = scrollRef.current.scrollTop;
          const bottom =
            scrollRef.current.scrollHeight -
            scrollRef.current.scrollTop -
            scrollRef.current.clientHeight;
          if (top === 0 && topPage > 1) {
            const fetchedData = await getRankByPage(topPage - 1);
            setTopPage(topPage - 1);
            setRankInfoList([...fetchedData, ...rankInfoList]);
          } else if (bottom === 0 && bottomPage < Math.ceil(totalCount / 10)) {
            console.log(bottomPage);
            const fetchedData = await getRankByPage(bottomPage + 1);

            setBottomPage(bottomPage + 1);
            setRankInfoList([...rankInfoList, ...fetchedData]);
          }
          setIsLoading(false);
        }
      };
      divElement.addEventListener("scroll", fetchByScrollValue);
      return () => {
        divElement.removeEventListener("scroll", fetchByScrollValue);
      };
    }
  }, [totalCount, topPage, bottomPage]);

  const searchRank = async () => {
    const res = await client.get(`points/rank/search?name=${searchValue}`);
    const data = res.data;

    if (data.users === undefined) {
      setRankInfoList([]);
      setTopPage(0);
      setBottomPage(Math.ceil(totalCount / 10));
    }
    setRankInfoList(data.users);

    setTopPage(data.page);
    setBottomPage(data.page);
  };

  const searchMyRank = async () => {
    const res = await client.get("points/rank/my");
    const data = res.data;

    if (data.users === undefined) {
      setRankInfoList([]);
      setTopPage(0);
      setBottomPage(Math.ceil(totalCount / 10));
    }
    setRankInfoList(data.users);
    setTopPage(data.page);
    setBottomPage(data.page);
  };

  const getRankByPage = async (page: number) => {
    const result = await client.get(`points/rank?page=${page}`);
    const data = result.data;
    return data.users;
  };

  const getRankInfo = async () => {
    const res = await client.get("points/rank/info");
    const data = res.data;
    setBottomPage(1);
    setTopPage(1);
    setMyRank(data.rank);
    setTotalCount(data.total);
    setRankInfoList(data.rankList);
    const divElement = scrollRef.current;
    if (divElement) {
      divElement.scrollTop = 0;
    }
  };

  useEffect(() => {
    getRankInfo();
  }, []);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <NavigationBar />
        <PageTransitionWrapper>
          <RankingInfo
            scrollRef={scrollRef}
            total={totalCount}
            rank={myRank}
            rankInfoList={rankInfoList}
            searchMyRank={searchMyRank}
            clickModal={clickRankModal}
            searchValue={searchValue}
          />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            getRankInfo={getRankInfo}
            searchRank={searchRank}
          />
        </PageTransitionWrapper>
      </div>
      <ModalPortal isShowing={showRankModal}>
        <ShareRank clickModal={clickRankModal} totalRank={totalCount} myRank={myRank} />
      </ModalPortal>
      <ModalPortal isShowing={showRankShareModal}>
        <CommonModal>{rankShareModalText}</CommonModal>
      </ModalPortal>
    </>
  );
}
