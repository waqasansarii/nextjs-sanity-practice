export type Params = {
  params: { id: string }
}


// product types 
export type ProductType = {
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  _rev: string
  _type: string
  _id: string
  _updatedAt: string
  price: number
  _createdAt: string
  description: string
  title: string
}
