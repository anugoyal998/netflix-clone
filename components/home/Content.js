import React from 'react'
import {BsChevronRight} from 'react-icons/bs'

export default function Content() {
    return (
        <div className="text-white flex flex-col items-center translate-y-24">
            <p className="text-5xl font-bold ">Unlimited movies, TV</p>
            <p className="text-5xl font-bold ">shows and more.</p>
            <p className="text-2xl mt-3">Watch anywhere. Cancel anytime.</p>
            <p className="text-2xl mt-5">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex mt-2">
            <input type="email" placeholder="Email address" className="py-4 px-5 w-96 text-black outline-none focus:outline-none"/>
                <button className="flex space-x-1 items-center bg-front px-3 text-2xl">
                    <p>Get Started</p>
                    <BsChevronRight className="mt-1"/>
                </button>
            </div>
        </div>
    )
}
