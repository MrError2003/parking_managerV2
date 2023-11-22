import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Serv = () => {
    return (
    <section className="bg-gray-800 text-white">
        <div
            className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Servicios de nuestra plataforma.</h2>

                <p className="mt-4 text-gray-300 text-lg">
                    Contamos con los servicios necesarios para su vehiculo
                    desde estacionamiento, servicio mecanico, servicio de autolavado
                    y de mas...
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
                    href="/services/digital-campaigns"
                >
                        <Image
                            src="/images/icons/estacionamiento.png"
                            width={40}
                            height={40}
                            alt="Estacionamiento"
                        />

                    <h2 className="mt-4 text-xl font-bold text-white">Disponibilidad</h2>

                    <p className="mt-1 text-sm text-gray-300">
                    ¡Estaciona con confianza! Tu lugar siempre listo para ti.
                     Descubre la comodidad con nuestra amplia disponibilidad de estacionamientos. 
                     ¡Tu espacio, tu tranquilidad, nuestro compromiso!
                    </p>
                </a>

                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
                    href="/services/digital-campaigns"
                >
                    <Image
                            src="/images/icons/camara.png"
                            width={40}
                            height={40}
                            alt="Vigilancia 24/7"
                        />

                    <h2 className="mt-4 text-xl font-bold text-white">Monitoreo y vigilancia.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                    ¡Tu seguridad, nuestra prioridad! Con nuestro sistema de monitoreo, 
                    estacionar nunca fue tan tranquilo. Cuida tu vehículo.
                    ¡Estaciona con confianza, protegemos lo tuyo!
                    </p>
                </a>

                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
                    href="/services/digital-campaigns"
                >
                    <Image
                            src="/images/icons/mecanico.png"
                            width={40}
                            height={40}
                            alt="Servicio de mecanico"
                        />

                    <h2 className="mt-4 text-xl font-bold text-white">Servicio de taller mecanico.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                    Nuestro servicio de mecánica te respalda en cada giro. Profesionales apasionados listos para mantener 
                    tu vehículo en su mejor forma. No dejes que los problemas mecánicos te detengan.
                    </p>
                </a>

                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
                    href="/services/digital-campaigns"
                >
                    <Image
                            src="/images/icons/lavado.png"
                            width={40}
                            height={40}
                            alt="Servicio de lavado"
                        />

                    <h2 className="mt-4 text-xl font-bold text-white">Lavado.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                    Brillamos contigo. Descubre nuestro servicio de lavado, donde cada detalle cuenta. 
                    Tu vehículo merece el mejor cuidado. ¡Haz que luzca impecable, hazlo brillar con nosotros!
                    </p>
                </a>

                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
                    href="/services/digital-campaigns"
                >
                    <Image
                            src="/images/icons/electrico.png"
                            width={40}
                            height={40}
                            alt="Autos electricos"
                        />

                    <h2 className="mt-4 text-xl font-bold text-white">Autos electricos.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                    Nuestro estacionamiento cuenta con estaciones de carga para tu vehículo eléctrico. 
                    Haz una parada inteligente, carga con comodidad. ¡Sigue tu camino sin preocupaciones, 
                    estamos conectados contigo!
                    </p>
                </a>

                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
                    href="/services/digital-campaigns"
                >
                    <Image
                            src="/images/icons/moto.png"
                            width={40}
                            height={40}
                            alt="Estación de carga"
                        />

                    <h2 className="mt-4 text-xl font-bold text-white">Vehiculos pequeños</h2>

                    <p className="mt-1 text-sm text-gray-300">
                    ¡Estacionamiento sin límites! También pensamos en dos ruedas. Disfruta de la libertad 
                    con nuestros espacios exclusivos para motocicletas y bicicletas. Tu movilidad, nuestra prioridad. 
                    </p>
                </a>
            </div>

            <div className="mt-12 text-center">
                    <Link
                        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                        href="/download"
                    >
                        Reservas...
                    </Link>
            </div>
        </div>
    </section>
    )
}
