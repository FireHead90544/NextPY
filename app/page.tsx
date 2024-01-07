import Link from "next/link";

export default function Home() {
  return (
		<div className="flex justify-center h-screen items-center">
			<h1 className="font-thin text-3xl">
				<span className="font-semibold">NextPY</span> - <Link href="/api/">API Routes</Link>
			</h1>
		</div>
	);
}
