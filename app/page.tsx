import dynamic from 'next/dynamic'

const FeedDynamic = dynamic(() => import('@/components/Feed'), { ssr: false })


export default function Home() {
  
  return <FeedDynamic />
}
