import React from 'react'

const Steps = () => {
    return (
        <div className="lg:w-[85%] mx-auto">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto text-left">
                    <h3 className="text-3xl text-left mb-2 font-bold leading-normal">
                        Cara Membuat Undangan kamu
                    </h3>
                    <p
                        className="text-lg text-left font-light leading-relaxed mt-4 mb-4 text-gray-700"
                    >
                        Cara mudah membuat undangan, hanya butuh 5 menit undangan kamu sudah bisa di sebarkan..
                    </p>
                    <ul className="list-none mt-6">
                        <li className="py-2">
                            <div className="flex items-center">
                                <div>
                                    <span
                                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                                    >1</span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">
                                        Registrasi untuk membuat akun undangan kamu di sini.
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center">
                                <div>
                                    <span
                                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                                    >2</span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Isi Info Acara & Profile dan juga upload foto/gallery. Customize undangan kamu.</h4>
                                </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center">
                                <div>
                                    <span
                                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                                    >3</span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Pilih Preset / Template. Lihat daftar template kita</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600"
                    >
                        <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                            className="w-full align-middle rounded-t-lg"
                        />
                        <blockquote className="relative p-8 mb-4">

                            <h4 className="text-xl font-bold text-white">
                                Top Notch Services
                            </h4>
                            <p className="text-md font-light mt-2 text-white">
                                The Arctic Ocean freezes every winter and much of the
                                sea-ice then thaws every summer, and that process will
                                continue whatever happens.
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps