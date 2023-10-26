import React, { useState, useEffect } from 'react';

function Filter() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleBrandFilterChange = event => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    filterProducts(brand, selectedPrice);
  };

  const handlePriceFilterChange = event => {
    const price = event.target.value;
    setSelectedPrice(price);
    filterProducts(selectedBrand, price);
  };

  const filterProducts = (brand, price) => {
    let filtered = products;

    if (brand) {
      filtered = filtered.filter(product => product.brand === brand);
    }

    if (price) {
      filtered = filtered.filter(product => product.price === parseInt(price));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Product Filter</h1>
      <div>
        <label htmlFor="brand-filter">Filter by Brand:</label>
        <select id="brand-filter" value={selectedBrand} onChange={handleBrandFilterChange}>
          <option value="">All Brands</option>
          <option value="Brand 1">Brand 1</option>
          <option value="Brand 2">Brand 2</option>
          {/* Add more brand options as needed */}
        </select>
      </div>
     
      <div>
        <h2>Filtered Products:</h2>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="price-filter">Filter by Price:</label>
        <select id="price-filter" value={selectedPrice} onChange={handlePriceFilterChange}>
          <option value="">All Prices</option>
          <option value="109">109 Dollars</option>
          {/* Add more price options as needed */}
        </select>
      </div>
    </div>
  );
}

export default Filter;