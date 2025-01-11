import React from 'react'
import Link from 'next/link'
const Tshirts = () => {
  return (

    <section className="text-gray-600 body-font">

      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">

          {/* Single Product */}
          <Link href="/product/this-is-slug" className='lg:w-1/4 md:w-1/2 p-4 w-full rounded transition cursor-pointer hover:shadow-md'>

              <div className="block relative h-fit cursor-pointer rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="/uploads/shirt1.jpg" />
              </div>

              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
        
          </Link>

        </div>
      </div>
    </section>

  )
}

export default Tshirts
