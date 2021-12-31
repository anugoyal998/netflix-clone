import Image from 'next/image'
import React from 'react'
import child from '../../img/children.png'
export default function Children() {
    return (
        <div className="bg-black py-16 px-36 flex items-center">
            <div className="transform hover:scale-110 animation cursor-pointer mr-10">
                <Image src={child} alt="" />
            </div>
            <div>
                <p className="text-5xl font-bold">Create profiles for children.</p>
                <p className="text-2xl font-semibold mt-5">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
    )
}
