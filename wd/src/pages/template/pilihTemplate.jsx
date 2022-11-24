import React from 'react'
import Header from '../../component/Header'
import { Link } from 'react-router-dom'
import TemplateAPreview from '../../assets/images/TemplateA.png'
import TemplateBPreview from '../../assets/images/TemplateB.png'
import TemplateCPreview from '../../assets/images/TemplateC.png'

const PilihTemplate = () => {
    return (
        <>
            <Header />

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                <div class="p-4 rounded-md flex items-center justify-center mx-auto">
                    <div class="max-w-xl mx-auto">
                        <div class="bg-white mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="d#">
                                <img class="rounded-t-lg " src={TemplateAPreview} alt="" />
                            </a>
                            <div class="p-5">
                                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-5 dark:text-white">Template A</h5>
                                <Link to="/templateA" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Pilih Template
                                    <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 rounded-md flex items-center justify-center mx-auto">
                    <div class="max-w-xl mx-auto">
                        <div class="bg-white mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="d#">
                                <img class="rounded-t-lg " src={TemplateBPreview} alt="" />
                            </a>
                            <div class="p-5">
                                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-5 dark:text-white">Template B</h5>
                                <Link to="/templateB" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Pilih Template
                                    <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 rounded-md flex items-center justify-center mx-auto">
                    <div class="max-w-xl mx-auto">
                        <div class="bg-white mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="d#">
                                <img class="rounded-t-lg " src={TemplateCPreview} alt="" />
                            </a>
                            <div class="p-5">
                                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-5 dark:text-white">Template C</h5>
                                <Link to="/templateC" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Pilih Template
                                    <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PilihTemplate