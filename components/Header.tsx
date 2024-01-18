import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex justify-between mt-10 pb-5">
      <Link href="/">
        <h1 className="font-semibold text-3xl">
            <span className="font-semibold">NextPY</span>
        </h1>
        <h1 className="font-thin">Stream & Download Animes</h1>
      </Link>
      <ThemeToggle />
    </div>
  )
}
