import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function CartItem({ item, handleCart }) {
    return <div className="h-[107px] p-[10px] flex bg-white bg-opacity-[0.09]">
        <div className="grid grid-cols-[30%,_65%] gap-2">
            <img className="h-[77px] w-[94px] object-scale-down self-center" src={item.itemPhoto} alt="" />
            <div className=" text-white self-center">
                <div className="text-base">{item.title.length > 38 ? item.title.slice(0, 38) + ' ....' : item.title}</div>
                <div className="text-xs space-x-2">
                    <span>{item.price}$</span>
                    <button onClick={() => handleCart.removeCartItem(item.id)}>Remove</button>
                </div>
            </div>
        </div>
        <div className="pl-1 flex flex-col text-white justify-center items-center">
            <span onClick={() => handleCart.setAmmount('increase', item.id)}>
                <FontAwesomeIcon icon={faAngleUp} className="text-base text-primary cursor-pointer" />
            </span>
            <span className="text-base">{item.amount}</span>
            <span onClick={() => {
                handleCart.setAmmount('decrease', item.id);
                if (item.amount == 0) handleCart.removeCartItem(item.id);
            }}>
                <FontAwesomeIcon icon={faAngleDown} className="text-base text-primary cursor-pointer" />
            </span>
        </div>
    </div>
}

const Cart = ({ display, handleDisplay, cartItems = [], handleCart }) => {
    let cartTotal = 0;
    cartItems.forEach(item => {
        const itemPrice = item.amount * item.price;
        cartTotal += itemPrice;
    });
    return (
        <div className={`${display} fixed top-0 right-0 z-10 w-full sm:w-[400px] h-svh bg-black px-7 py-8 space-y-4 `}>
            <FontAwesomeIcon onClick={() => (handleDisplay('hidden'))} icon={faArrowLeftLong} className="text-white text-xl cursor-pointer" />
            <div className="h-[70vh] space-y-3 overflow-auto scroll-smooth">
                {cartItems.map(item => {
                    return <CartItem key={item.id} item={item} handleCart={handleCart} />
                })}
            </div>
            <p>Cart Total: {cartTotal.toFixed(2)}$</p>
            <button className="w-full text-primary text-xl font-medium border-2 border-primary rounded-lg py-1" onClick={() => handleCart.clearCart()}>Clear cart</button>
        </div>
    )
}
export default Cart;