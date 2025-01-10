import React from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";

const QtyInput = () => {
    return (
        <div className="inline-block bg-white border border-gray-200 rounded dark:bg-neutral-900 dark:border-neutral-700">
            <div className="flex items-center gap-x-1.5">
                <button type="button" className='border-r py-1.5 px-2'><FiMinus /></button>

                <input className="p-0 w-6 bg-transparent outline-none border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" defaultValue="0" />

                <button type="button" className='border-l py-1.5 px-2'><FiPlus /></button>
            </div>
        </div>
    )
}

export default QtyInput;
