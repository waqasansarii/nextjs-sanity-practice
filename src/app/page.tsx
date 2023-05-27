import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'
import { ProductType } from '@/lib/types'

const getProductData = async () => {
  let res = await client.fetch(`*[_type=="product"]`)
  return res
}

export default async function Home() {
  const data: ProductType[] = await getProductData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-x-5">
        {data.map((val: ProductType) => (
          <Link
            href={`/${val._id}`}
            className="border-white border-2 min-w-[280px] rounded-md hover:cursor-pointer"
            key={val._id}
          >
            <div className="w-[100%] h-[170px] text-center mx-auto">
              <Image
                width={300}
                height={100}
                src={urlForImage(val.image).url()}
                alt={'product'}
              />
            </div>
            <div className="p-3">
              <h2 className="text-white mt-2 text-2xl">{val.title}</h2>
              <p className="text-white opacity-2 mt2">{val.description}</p>
              <h4 className="mt-3">Price : {val.price}</h4>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
