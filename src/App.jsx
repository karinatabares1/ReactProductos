import { useState, useEffect } from 'react'
import { Header } from './Components/Layouts/Header/Header'
import './index.css';
import { MainContainer } from './Components/Layouts/MainContainer/MainContainer';
import { Footer } from './Components/Layouts/Footer/Footer';

export const App = () => {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error cargando productos:", err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <MainContainer products={filteredProducts} onSearch={setSearchTerm} />
      <Footer />
    </>
  )
}
