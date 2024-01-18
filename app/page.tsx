import { SearchAnime } from "@/components/AnimeSearch";
import { AnimeSearchList } from "@/components/AnimeSearchList";

export default function Home() {
  return (
		<div className="flex flex-col pt-4">
			<SearchAnime />
			<AnimeSearchList />
		</div>
	);
}
