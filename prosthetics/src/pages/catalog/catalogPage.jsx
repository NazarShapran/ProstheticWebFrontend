import React from 'react'

const CatalogPage = () => {
  const products = [
    { id: 1, name: 'Prosthetic Arm', price: '$500' },
    { id: 2, name: 'Prosthetic Leg', price: '$700' },
    { id: 3, name: 'Prosthetic Hand', price: '$300' },
  ]

  return (
    <div className="catalog-page">
      <h1>Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CatalogPage

