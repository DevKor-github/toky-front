"use client";
import NavigationBar from "@/components/common/NavigationBar";
import RankingInfo from "@/components/ranking/RankingInfo";
import SearchBar from "@/components/ranking/SearchBar";
import { useEffect, useRef, useState } from "react";
import { RankingItemT } from "@/components/ranking/RankingInfo";
import client from "@/lib/httpClient";
import PageTransitionWrapper from "@/components/common/PageTransition";
import ModalPortal from "@/components/common/ModalPortal";
import ShareRank from "@/components/share/ShareRank";

export default function Ranking() {
  const [topPage, setTopPage] = useState(1);
  const [bottomPage, setBottomPage] = useState(1);

  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  // 여기에 하이라이팅
  const [myRank, setMyRank] = useState(-1);

  const [rankInfoList, setRankInfoList] = useState<RankingItemT[]>([]);
  const [showRankModal, setShowRankModal] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  function clickRankModal() {
    setShowRankModal(!showRankModal);
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
        <ShareRank
          clickModal={clickRankModal}
          totalRank={totalCount}
          myRank={myRank}
        />
      </ModalPortal>
    </>
  );
}
