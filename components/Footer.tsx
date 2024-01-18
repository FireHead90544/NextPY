import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <div className='pt-5 mb-8'>
        <Separator className='my-4' />
        <div className='flex justify-between mt-2'>
            <div className='space-x-2'>
                <span className='animate-wave inline-block origin-[70%_70%]'>👋</span>
                <span>{new Date().getFullYear()}</span>
                <span className='text-stone-300 dark:text-stone-700'>—</span>
                <span className='font-thin'>こんにちは</span>
            </div>
            <Link className= 'flex space-x-2' href="https://github.com/FireHead90544/NextPY" target='_blank'>
                <FaGithub className='my-auto' />
                <span className='font-semibold underline underline-offset-4 decoration-stone-200 hover:decoration-stone-300 dark:decoration-stone-800 dark:hover:decoration-stone-700'>NextPY</span>
            </Link>
        </div>
    </div>
  )
}
