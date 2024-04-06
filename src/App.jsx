import { useState, useEffect } from "react";
import useContentful from "./useContentful.jsx";
import Cart from "./components/Cart.jsx";
import Collections from "./components/Collections.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [dataFetchError, setDataFetchError] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [displayCart, setDisplayCart] = useState('hidden');
  const { getProducts } = useContentful();


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:5500/data.json');
  //       const data = await response.json();
  //       const products = data.items.map(product => {
  //         const { title, price } = product.fields;
  //         const { id } = product.sys;
  //         const image = product.fields.image.fields.file.url;

  //         return { title, price, id, image };
  //       })

  //       setProducts(products);
  //     } catch (err) {
  //       setDataFetchError(true);
  //       console.log('error is: ' + err);
  //     }
  //   }

  //   fetchData();
  // }, [])


  useEffect(() => {
    getProducts()
      .then(response => setProducts(response))
      .catch(error => {
        setDataFetchError(true);
        console.log(error);
      })
  }, []);


  const handleDisplayCart = (display) => {
    setDisplayCart(display);
  }

  const handleCartItems = {
    addCartItems(item) {
      setCartItems(prev => [...prev, item]);
    },
    removeCartItem(id) {
      const filter = cartItems.filter(item => item.id !== id);
      setCartItems(filter);
    },
    clearCart() {
      setCartItems([]);
    },
    setAmmount(toDo, id) {
      const items = [...cartItems];
      const index = items.findIndex(item => item.id === id);
      if (toDo == 'increase') items[index].amount += 1;
      if (toDo === 'decrease') items[index].amount -= 1;
      setCartItems(items);
    }
  }

  return (
    <div className="relative">
      <Navbar cartTotal={cartItems.length} handleDisplayCart={handleDisplayCart} />
      <Hero />
      <Collections products={products} handleCart={handleCartItems} cartItems={cartItems} dataFetchError={dataFetchError} />
      <Cart display={displayCart} handleDisplay={handleDisplayCart} cartItems={cartItems} handleCart={handleCartItems} />
    </div>
  )
}
export default App;