import React from 'react'
import Image from 'next/image'

export default function Autolavado() {
    return (
        <section>
            <div
                className=" bg-gray-800 mx-auto max-w-screen-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <Image
                            alt="Party"
                            src="/images/autolavado1.jpeg"
                            className="absolute inset-0 h-full w-full object-cover"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Cabinas de autolavado</h2>

                        <p className="mt-4 text-gray-200">
                        Cabinas de autolavado con agua caliente y fria, con jabon especial para el 
                        cuidado de la pintura de tu vehiculo. Estas cabinas cuentan con un sistema de
                        hidrolavado de alta presion, para una limpieza profunda de tu vehiculo.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Reserva tu turno
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
