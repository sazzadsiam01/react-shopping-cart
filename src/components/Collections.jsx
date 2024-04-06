import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ itemPhoto, title, id, price, cartItems = [], handleCart }) => {
    const inCart = cartItems.filter(item => item.id == id).length !== 0;
    const item = {
        itemPhoto: itemPhoto,
        title: title,
        price: price,
        id: id,
        amount: 1,
    }
    return (
        <div className='bg-white text-black text-center'>
            <div className='relative mb-2 pt-[71.15%]'>
                <img className='absolute top-0 left-0 object-scale-down w-full h-full' src={itemPhoto} alt="" />
            </div>
            <p className='mb2 text-lg min-h-14 px-2'>{title}</p>
            <p className='mb-2 text-2xl font-medium'>{price}$</p>
            <button className='text-primary mx-auto mb-3 flex justify-center items-center gap-3 w-[87%] px-8 border-4 rounded-lg border-primary hover:bg-black transition duration-300 ease-in-out' onClick={() => handleCart.addCartItems(item)} disabled={inCart ? true : false}>
                <p className='text-base font-medium'>{inCart ? 'Added to cart' : 'Add to cart'}</p>
                <FontAwesomeIcon icon={faCartPlus} className='text-base text-primary' />
            </button>
        </div>
    )
}

const Collections = ({ products = [], handleCart, cartItems, dataFetchError }) => {

    let ourCollection;

    if (dataFetchError) {
        ourCollection = <p className="text-4xl font-light text-center pb-7">something went wrong</p>
    } else {
        ourCollection = products.map(product => {
            return <ProductCard handleCart={handleCart} key={product.id} id={product.id} itemPhoto={product.image.file.url} title={product.title} price={product.price} cartItems={cartItems} />;
        })
    }

    return (
        <section className='mt-10'>
            <h2 className='relative text-center text-4xl mb-28 w-fit mx-auto'>
                Our collections
                <span className='absolute w-[60%] h-1 bg-primary mx-auto left-0 right-0 bottom-[-10px] '></span>
            </h2>
            <div className='grid custom-grid-layout gap-5'>{ourCollection}</div>
        </section>
    )
}
export default Collections;