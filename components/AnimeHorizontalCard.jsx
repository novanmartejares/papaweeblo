import { Badge } from './ui/badge'
import { Captions, Mic } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { cn } from '@/lib/utils'
import { Bebas_Neue } from 'next/font/google'
const bebas_nueue = Bebas_Neue({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin'],
    display: "swap",
})
const AnimeHorizontalCard = ({ anime, type }) => {

    return (
        <div className={cn("w-full z-0", type == "suggestion" && "w-screen sm:w-full")}>
            <Link href={`/animeInfo/${encodeURIComponent(anime.id)}`} >
                <Card className="cursor-pointer border-none z-0">
                    <CardContent className="flex items-start p-2 space-x-2 z-0">
                        <img className={cn("rounded-sm min-h-[90px] max-h-[90px] max-w-[80px] sm:max-h-[100px] sm:min-h-[100px] sm:min-w-[70px] sm:max-w-[70px]  object-center ")} alt="poster" width={100} height={200} layout="responsive" src={`${anime.poster}`} />
                        <div className='flex flex-col space-y-1 w-full'>
                            <div className={cn("grid grid-cols-4 space-x-2", type == "suggestion" && "")}>
                                <Badge variant="outline" className="bg-secondary bg-opacity-70  text-white border-none">{type == "suggestion" ? anime?.moreInfo[2] : anime?.type?.split('(')[0]}</Badge>
                                <Badge variant="outline" className="bg-white col-span-2 text-black dark:border-none bg-opacity-70 ">{type == "suggestion" ? anime?.moreInfo[0] : anime?.duration ? anime.duration : "N/A"}</Badge>
                                <Badge variant="outline" className="bg-opacity-20 ">{type == "suggestion" ? anime?.moreInfo[1] : anime?.rating ? anime.rating : "N/A"}</Badge>
                            </div>
                            <p className={cn("text-2xl ", bebas_nueue.className, type == "suggestion" && "text-xl")}>{anime.name.length > 50 ? anime.name.slice(0, 50) + "..." : anime.name}</p>
                            <div className="flex justify-end items-center space-x-1 text-sm">
                                {
                                    anime.episodes?.sub && <div className="flex items-center ">
                                        <Captions className="w-4" />
                                        <span>{anime.episodes?.sub}</span>
                                    </div>
                                }
                                {
                                    anime.episodes?.dub && <div className="flex items-center ">
                                        <Mic className="w-4" />
                                        <span>{anime.episodes?.dub ? anime.episodes.dub : "N/A"}</span>
                                    </div>
                                }

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}

export default AnimeHorizontalCard