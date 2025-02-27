import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { LuHeart } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdDirectionsBike } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";


const Product = (props) => {
    let router = useRouter(),
        { slug } = router.query,

        [service, setService] = useState(null),
        [pin, setPin] = useState(null);

    // Check Servicebility 
    const checkService = async () => {
        let pinCodes = await fetch("http://localhost:3000/api/pincodes"),
            response = await pinCodes.json();
        setService(response.includes(parseInt(pin)) ? true : false);
    }

    // Handle Pin
    const handlePin = (e) => {
        setPin(e.target.value);
    }

    // Handle Add To Cart
    const handleAddToCart = () => {
        props.addToCart({
            title: "Black Tshirt (XL,SM)",
            code: 1234,
            price: 200,
            quantity: 1,
            image: "shirt2.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae distinctio cum consequuntur aspernatur vel, tempora perspiciatis totam delectus error aperiam culpa, quidem, quas quos. Quisquam, quod. Quisquam, quod.",
        });
        props.toggleCart(true);
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">

                    <div className='relative lg:w-1/2 w-full lg:h-auto'>
                        <img alt="ecommerce" className="w-full object-cover rounded" src="/uploads/shirt1.jpg" />
                        <button className="rounded-full w-10 h-10 bg-pink-600 hover:bg-pink-800 p-0 border-0 inline-flex items-center justify-center text-white absolute top-4 right-5"><LuHeart width={14} height={14} /></button>
                        <button className="rounded-full w-10 h-10 bg-pink-600 hover:bg-pink-800 p-0 border-0 inline-flex items-center justify-center text-white absolute top-20 right-5" onClick={handleAddToCart}><HiOutlineShoppingCart width={14} height={14} /></button>
                    </div>

                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0">


                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
                        <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">Beige T-Shirt (XL,LG,SMALL,BLUE)</h1>

                        <div className="flex mb-4">
                            {/* Reviews */}
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            {/* Social Icons  */}
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        {/* Description */}
                        <p className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolores tenetur est, qui deleniti nisi reprehenderit magni, optio hic voluptatem a explicabo alias impedit recusandae amet, similique quae perferendis iste.</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            {/* Colors Varient */}
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            {/* Size */}
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                            <button className="flex ml-auto text-sm text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded items-center gap-2"> <FaCheck /> Buy Now</button>
                        </div>

                        <div className="flex mt-4 gap-3 rounded border shadow-sm w-fit">
                            <input type="text" onChange={handlePin} className='outline-none w-full bg-white py-2 px-4  text-sm text-slate-700 border-none border-0' placeholder='Enter your pin code' />
                            <button onClick={checkService} className="flex text-white rounded-l-none text-sm bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded items-center gap-2"><MdDirectionsBike />Check</button>
                        </div>

                        <div className="mt-2 text-sm w-fit">
                            {service === null ? null : service === true ? <p className="text-green-500">Service Available</p> : <p className="text-red-500">Service Not Available</p>}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;
