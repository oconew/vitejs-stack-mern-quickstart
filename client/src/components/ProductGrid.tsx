/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'

import '../styles/Menu.css'

interface ProductsProperties {
  name: string
  category: string
  price: string
  description: string
  image_path: string
}

export default function ProductGrid(props: { category: string | undefined }) {
  const [products, setProducts] = React.useState<ProductsProperties[]>([])

  React.useEffect(() => {
    if (props.category) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      void axios
        .get('http://localhost:5050/posts/' + props.category)
        .then((response) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setProducts(response.data)
        })
    }
  }, [props.category])

  if (!products) {
    return null
  }

  return (
    <>
      <div className="product-grid napkin relative align-center justify-center">
        {products.map(({ name, category, description, image_path }) => {
          let type
          if (
            category === 'starters-sharers' ||
            category === 'steak' ||
            category === 'yakitori' ||
            category === 'mains' ||
            category === 'salads-sides' ||
            category === 'burgers-pizzas' ||
            category === 'desserts'
          ) {
            type = 'food'
          } else {
            type = 'drink'
          }
          return (
            <ProductItem
              {...{
                type: type,
                title: name,
                category: category,
                description: description,
                img_path: image_path,
              }}
            />
          )
        })}
      </div>
    </>
  )
}
