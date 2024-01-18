"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SearchAnime() {
  return (
		<div className='w-full'>
      <h1 className="text-xl font-extralight">Search Anime</h1>
      <div className="flex items-center space-x-2 my-2">
        <Input className="font-light" type="email" placeholder="jujutsu kaisen" />
        <Button className="font-light" type="submit">Search</Button>
      </div>
		</div>
	);
}
