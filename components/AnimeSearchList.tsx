import React from 'react'
import Image from 'next/image'

export function AnimeSearchList() {
  return (
    <div className='pt-2 flex h-full rounded-md border space-x-2'>
      { Array.from({ length: 10 }).map((_, i) =>
        <div className='border rounded-md'>{ i+1 }</div>
      )}
    </div>
  )
}
