import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cart = (props) => {

    const removeFromCart = (code) => {
        props.removeFromCart(code);
    }

    // Manage Quantity
    const manageQuantity = (type, code) => {

        let newCart = JSON.parse(JSON.stringify(props.cart));

        if (type == 'increase') {
            newCart[code].quantity += 1;
        } else {
            if (newCart[code].quantity < 1) {
                props.removeFromCart(code);
                return true;
            }
            newCart[code].quantity -= 1;
        }

        props.setCart(newCart);
        props.saveCart(newCart);

    }


    const setQuantity = (qty, code) => {
        let newCart = JSON.parse(JSON.stringify(props.cart));
        newCart[code].quantity = qty;
        props.setCart(newCart);
        props.saveCart(newCart);
    }

    return (
        <div className={`relative z-50`} role="dialog">
            {/* Over Lay */}
            <div onClick={() => props.toggleCart(false)} className={`fixed inset-0 bg-gray-500/75 transition-opacity duration-300 ${props.isOpen == false ? "hidden" : ""}`}></div>

            <div className={`fixed inset-y-0 ${props.isOpen == false ? "-right-96" : "right-0"} transition-all duration-300 flex h-full flex-col overflow-y-auto bg-white shadow-xl w-full max-w-96`}>

                {/* Header */}
                <div className="flex items-start px-4 py-6 sm:px-6 shadow-sm justify-between sticky top-0">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>

                    <div className="ml-3 flex h-7 items-center">
                        <button type="button" className="relative -m-2 p-2 text-gray-400 " onClick={() => props.toggleCart(false)}>
                            <IoMdClose size={20} className='fill-gray-600 hover:fill-gray-800' />
                        </button>
                    </div>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 scrollbar">

                    <ul role="list" className="-my-6 divide-y divide-gray-200">

                        {Object.keys(props.cart).length ? Object.keys(props.cart).map(code => {
                            let product = props.cart[code];
                            return (
                                <li className="flex py-6" key={code}>
                                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src={`/uploads/${product.image}`} alt="ALT_HERE" className="size-full object-cover" />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href="#">{product.title}</a>
                                                </h3>
                                                <p className="ml-4">{product.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{product.description.slice(0, 50)}...</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">


                                            <div className="inline-block bg-white border border-gray-200 rounded dark:bg-neutral-900 dark:border-neutral-700">
                                                <div className="flex items-center gap-x-1.5">
                                                    <button onClick={() => manageQuantity("descrease", code)} type="button" className='border-r py-1.5 px-2'><FiMinus /></button>

                                                    <input className="p-0 w-6 bg-transparent outline-none border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" value={product.quantity} onChange={(e) => setQuantity(e.target.value, code)} />

                                                    <button onClick={() => manageQuantity("increase", code)} type="button" className='border-l py-1.5 px-2'><FiPlus /></button>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <button type="button" className="font-medium text-pink-600 hover:text-pink-500" onClick={() => removeFromCart(code)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }) : <div className='text-xl text-slate-800 text-center mt-6'>Your cart is empty!</div>

                        }

                    </ul>

                </div>



                {/* Footer  */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>RS: {props.subTotal}</p>
                    </div>

                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700">Checkout</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or &nbsp;
                            <button type="button" className="font-medium text-pink-600 hover:text-pink-500">
                                Continue Shopping
                                <span> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Cart;
