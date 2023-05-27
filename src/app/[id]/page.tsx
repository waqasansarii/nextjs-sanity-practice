// 'use client'
// import {  }

import { Params, ProductType } from '@/lib/types'
import { client } from '../../../sanity/lib/client'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'

const detailProductData = async (id: string) => {
  let resp = await client.fetch(`*[_type=="product" && _id=='${id}'][0]`)
  return resp
}

const DetailProduct = async ({ params }: Params) => {
  let detailData: ProductType = await detailProductData(params.id)

  return (
    <div className="flex items-center justify-center">
      <div>
        <Image
          width={400}
          height={300}
          src={urlForImage(detailData.image).url()}
          alt="product"
        />
      </div>
      <div>
        <h1 className="text-3xl">{detailData.title}</h1>
        <p className="text-lg mt-3">{detailData.description}</p>
        <h4 className="mt-2">{detailData.price}</h4>
      </div>
    </div>
  )
}

export default DetailProduct
