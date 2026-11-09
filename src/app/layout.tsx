import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://vehiclescrapping.in'),title:{default:'Vehicle Scrapping Yard in Gwalior | Responsible Recycling',template:'%s | Vehicle Scrapping Yard'},description:'Vehicle and industrial scrap services in Gwalior, Madhya Pradesh. Enquire about responsible vehicle scrapping, collection and material recovery.',applicationName:'Vehicle Scrapping Yard'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
