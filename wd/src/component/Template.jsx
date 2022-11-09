import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/images/conclusion-smartphone.png'

const Template = () => {
    return (
        <div id="download" className="my-14">
            <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
                <div className="grid mb-16 lg:mb-0 justify-items-end">
                    <img src={Image} alt="alternative" />
                </div>
                <div className="lg:mt-24 xl:mt-44 xl:ml-12">
                    <p className="mb-9 text-gray-800 text-3xl leading-10 text-left">{`Temukan tema undangan unik dan menarik dari My Wedding. Berbagai pilihan dan contoh desain undangan ekslusif ada disini`}</p>
                    <Link to="/desain">
                        <button type="button" className="text-white grid justify-items-start bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Selengkapnya
                            {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Template