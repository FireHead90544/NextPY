import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
		<div className="flex justify-center h-screen items-center">
				<h1 className="font-thin text-3xl">
					<span className="font-semibold">NextPY</span> -{" "}
					<Link href="/">Stream & Download Animes</Link>
				</h1>
				<ThemeToggle />
		</div>
	);
}
