"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {


  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gray-800" >
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>

        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          width={1000}
          height={1000}
          src="/images/fondo1.jpeg"
        />

      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">

          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Tenemos lo que
            <br className="hidden md:block" />
            que necesita{' '}
            <br className="hidden md:block" />
            <span className="inline-block text-deep-purple-accent-400">
            tu auto.
            </span>
          </h2>

          <div className="flex items-center">
            <Link href="/servicios" >
              <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">
                Conoce mas...
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>

  );
};
