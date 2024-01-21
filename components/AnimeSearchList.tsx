import React from 'react'
import Image from 'next/image'
import { AnimeCard } from '@/components/AnimeCard'

export function AnimeSearchList() {
  return (
		<div className="pt-2 flex h-full rounded-md border space-x-2">
      {/* Test Component */}
			<AnimeCard
				released={null}
				name="Ore dake Level Up na Ken"
				image="https://gogocdn.net/cover/jujutsu-kaisen-tv-2nd-season-1688154932.png"
				id="ore-dake-level-up-na-ken"
			/>
		</div>
	);
}
