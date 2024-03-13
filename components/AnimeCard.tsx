import React from 'react'
import Image from 'next/image'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface AnimeCardProps {
    name: string;
    id: string;
    image: string;
    released: number | null;
}

export function AnimeCard({ name, id, image, released }: AnimeCardProps) {
  // TODO: Mobile Devices: Convert Flex-Col to Flex-Row Based Layout (OK)
  return (
    <Card className='w-72 rounded-md p-4 space-y-3'>
        <Image className="mx-auto rounded-md w-3/4" src={image} width={460} height={650} alt={ name } />
        <CardTitle className='mx-auto text-center text-sm font-[350] leading-tight w-3/4'>{ name }</CardTitle>
    </Card>
  )
}
