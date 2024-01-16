import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  return (
    <div className="flex justify-between my-12">
        <h1 className="font-semibold text-3xl">
            <span className="font-semibold">NextPY</span>
        </h1>
        <ThemeToggle />
    </div>
  )
}
