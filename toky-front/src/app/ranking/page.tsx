import NavigationBar from "@/components/common/NavigationBar";
import RankingInfo from "@/components/ranking/RankingInfo";
import SearchBar from "@/components/ranking/SearchBar";

export default function Ranking() {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavigationBar />
      <RankingInfo />
      <SearchBar />
    </div>
  );
}
