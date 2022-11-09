import React from 'react'
import Footer from '../../component/Footer'
import Header from '../../component/Header'

const Faq = () => {

    return (
        <>
            <Header />
            <section className="bg-white dark:bg-gray-900 mt-14 text-left max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
                <div className="px-8 mx-auto mt-20 space-y-2 shadow lg:max-w-3xl">
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">How to create Accordion (FAQ) in react ?</summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">
                                React with Tailwind CSS Faq Accordion 1
                            </p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">
                            How to use tailwind css 3 in react
                        </summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">
                                React with Tailwind CSS Faq Accordion 2
                            </p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">
                            How to install Tailwind CSS 3 ?
                        </summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">
                                React with Tailwind CSS Faq Accordion 3
                            </p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">
                            How to send feedback ?
                        </summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">
                                React with Tailwind CSS Faq Accordion 4
                            </p>
                        </div>
                    </details>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Faq