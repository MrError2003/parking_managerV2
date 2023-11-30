"use client"

import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';


export default function Newcarrusel() {
    useEffect(() => {
        const keenSlider = new KeenSlider('#keen-slider', {
            loop: true,
            slides: { origin: 'center' },
            perView: 1.25,
            spacing: 16,
            breakpoints: {
                '(min-width: 1024px)': {
                    slides: { origin: 'auto' },
                    perView: 1.5,
                    spacing: 32,
                },
            },
        });

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');
        const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
        const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

        keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
        keenSliderNext.addEventListener('click', () => keenSlider.next());
        keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
        keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

        return () => {
            keenSlider.destroy();
        };
    }, []);

    return (
        <>
            <section className="bg-gray-800">
                <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                        
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">
                                Tenemos todo lo que tu
                                vehiculo necesita
                            </h2>

                            <p className="mt-4 text-white-700">
                                Su destino de confianza para estacionamiento, autolavado y mecánica,
                                donde la excelencia se encuentra con el cuidado.
                            </p>

                            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                                <button
                                    aria-label="Previous slide"
                                    id="keen-slider-previous-desktop"
                                    className="rounded-full border border-blue-800 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 rtl:rotate-180"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </button>

                                <button
                                    aria-label="Next slide"
                                    id="keen-slider-next-desktop"
                                    className="rounded-full border border-blue-800 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                >
                                    <svg
                                        className="h-5 w-5 rtl:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="-mx-6 lg:col-span-2 lg:mx-0">
                            <div id="keen-slider" className="keen-slider">
                                <div className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-gray p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="mt-4" style={{ overflow: 'hidden' }}>
                                                <Image
                                                    src="/images/paisaje1.jpeg"
                                                    width={1024}
                                                    height={400}
                                                    className="mt-4 leading-relaxed"
                                                    
                                                />
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                                <div className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-gray p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="mt-4" style={{ overflow: 'hidden' }}>
                                                <Image
                                                    src="/images/paisaje2.jpeg"
                                                    width={1000}
                                                    height={1000}
                                                    className="mt-4 leading-relaxed"
                                                    
                                                />
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                                <div className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-gray p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="mt-4" style={{ overflow: 'hidden' }}>
                                                <Image
                                                    src="/images/paisaje3.jpeg"
                                                    width={1000}
                                                    height={1000}
                                                    className="mt-4 leading-relaxed"
                                                    
                                                />
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                                <div className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-gray p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="mt-4" style={{ overflow: 'hidden' }}>
                                                <Image
                                                    src="/images/paisaje4.jpeg"
                                                    width={1024}
                                                    height={400}
                                                    className="mt-4 leading-relaxed"
                                                    
                                                />
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                                <div className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-gray p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="mt-4" style={{ overflow: 'hidden' }}>
                                                <Image
                                                    src="/images/paisaje5.jpeg"
                                                    width={1024}
                                                    height={400}
                                                    className="mt-4 leading-relaxed"
                                                    
                                                />
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                                <div className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-gray p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="mt-4" style={{ overflow: 'hidden' }}>
                                                <Image
                                                    src="/images/paisaje6.jpeg"
                                                    width={1024}
                                                    height={400}
                                                    className="mt-4 leading-relaxed"
                                                    
                                                />
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-4 lg:hidden">
                        <button
                            aria-label="Previous slide"
                            id="keen-slider-previous"
                            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <svg
                                className="h-5 w-5 -rotate-180 transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>

                        <button
                            aria-label="Next slide"
                            id="keen-slider-next"
                            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
