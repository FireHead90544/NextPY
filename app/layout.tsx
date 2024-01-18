import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextPY - Stream & Download Animes',
  description: 'An open source anime streaming & downloading platform based on SenPY (Anime Downloader)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className='flex flex-col mx-auto px-6 sm:px-8 h-screen max-w-screen-sm'>
						<Header />
						<div className="flex-1">
							{children}
						</div>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
