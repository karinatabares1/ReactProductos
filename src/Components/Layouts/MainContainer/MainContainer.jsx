import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { SearchBar } from '../SearchBar/SearchBar';


export const MainContainer = ({ products, onSearch }) => {
  return (
    <main className="main-container">
      <SearchBar onSearch={onSearch} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
