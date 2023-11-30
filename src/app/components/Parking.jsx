import React from 'react'

export default function Parking() {
    return (
        <section
            className="overflow-hidden bg-[url('/images/fondo-park.jpg')] bg-cover bg-top bg-no-repeat"
        >
            <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Servicio principal
                    </h2>

                    <p
                        className="text-center max-w-lg mx-auto text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                    >
                        Estacionamientos cómodos, accesibles y seguros. Con instalaciones de primera calidad,
                        adecuados para todo tipo de vehículos, desde grandes camiones hasta motocicletas y bicicletas.
                    </p>

                    <div className="mt-4 sm:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Reserva tu lugar.
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
