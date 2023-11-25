"use client"

import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


export const H3 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return (
        <div className="overflow-hidden bg-gray-800">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Tenemos todo lo que tu <br className="hidden md:block" />
                            vehiculo necesita{' '}

                        </h2>
                        <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                            Su destino de confianza para estacionamiento, autolavado y mecánica,
                            donde la excelencia se encuentra con el cuidado.
                        </p>
                        <Link
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="w-full max-w-3xl xl:px-8 xl:w-5/12">
                        <div className="relative">

                            <div className="relative rounded shadow-2xl p-7 sm:p-10">

                                <Slider {...settings} >
                                    <div>
                                        <Image
                                            width={5000}
                                            height={5000}
                                            src="/images/fondo1.jpeg"
                                            alt="Fondo 1"
                                        />
                                    </div>

                                    <div>
                                        <Image
                                            width={5000}
                                            height={5000}
                                            src="/images/mecanico-slider.jpeg"
                                        />
                                    </div>

                                    <div>
                                        <Image
                                            width={5000}
                                            height={5000}
                                            src="/images/autolavado-slider.jpeg"
                                        />
                                    </div>

                                    <div>
                                        <Image
                                            width={5000}
                                            height={5000}
                                            src="/images/electrico-slider.jpeg"
                                        />
                                    </div>
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
