import Image from "next/image";


export const Mecanic = () => {
    return (
        <div className="bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Nuestro</span>
                    </span>{' '}
                    servicios de mecanica y reparacion.
                </h2>
                <p className="text-base text-gray-100 md:text-lg">
                    En nuestro taller mecánico, se pueden llevar a cabo diversas actividades relacionadas con el mantenimiento,
                    reparación y mejora de vehículos. Aquí hay algunas cosas que se podrían hacer en un taller mecánico:
                </p>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-aceite.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Cambio de aceite
                                </h6>
                                <p className="text-sm text-white">
                                Revitaliza tu motor con nuestro servicio de cambio 
                                de aceite y filtros. Potencia, rendimiento y durabilidad garantizados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-alineacion.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Alineacion y balanceo de ruedas
                                </h6>
                                <p className="text-sm text-white">
                                Optimiza tu viaje: Alineación y balanceo de ruedas 
                                para un manejo suave, seguro y sin problemas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-freno.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Mantenimiento de frenos.
                                </h6>
                                <p className="text-sm text-white">
                                Seguridad en cada frenada: Reparamos frenos para un viaje 
                                tranquilo. Confía en nosotros para un rendimiento impecable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-llantas.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Reparacion de suspension
                                </h6>
                                <p className="text-sm text-white">
                                Suavidad en cada ruta: Reparamos y mejoramos la 
                                suspensión para un manejo cómodo y sin sobresaltos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-tecnico.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Revision tecnicomecanica
                                </h6>
                                <p className="text-sm text-white">
                                Asegura tu viaje: Realizamos revisiones tecnomecánicas 
                                para garantizar que tu vehículo cumpla con los estándares de seguridad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-cabina.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Reparaciones electricas
                                </h6>
                                <p className="text-sm text-white">
                                Potencia sin problemas: Reparamos tu sistema eléctrico 
                                para un rendimiento fiable. Conecta con seguridad y eficiencia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-moto.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Tambien es para motocicletas
                                </h6>
                                <p className="text-sm text-white">
                                Los servicios completos para mantener tu motocicleta 
                                en su mejor forma. ¡Rueda con confianza y estilo!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-gray-700 rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <Image
                            src="/images/mec-bicicleta.jpg"
                            width={400}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="flex-grow rounded-b">
                            <div className="p-5">
                                <h6 className="text-white mb-2 font-semibold leading-5">
                                    Y para bicicletas?
                                </h6>
                                <p className="text-sm text-white">
                                Sí, también cuidamos de tu bicicleta: reparaciones expertas para que pedalear 
                                sea siempre suave y seguro. ¡Mantenimiento completo para tu movilidad activa!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-700 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
                >
                    Reserva...
                </a>
            </div>
        </div>
    );
};