import Image from "next/image";

export const Electricos = () => {
    return (
        <div className="bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-cyan-400 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                                width="52"
                                height="24"
                            />
                        </svg>
                    </span>{' '}
                    Espacios para autos electricos
                </h2>
                <p className="text-base text-gray-100 md:text-lg">
                    Tambien contamos con espacios para autos electricos, con estaciones de carga de
                    ultima generacion, para que puedas cargar tu auto mientras este estacionado.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-900">
                                <svg
                                    className="w-8 h-8 text-yellow-500"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">
                                Estaciones de carga
                            </h6>
                            <p className="text-sm text-gray-200">
                            Estaciones de carga para vehículos eléctricos integradas, 
                            tu lugar de estacionamiento, tu fuente de energía.
                            </p>
                            <hr className="w-full my-6 border-gray-300" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-900">
                                <svg
                                    className="w-8 h-8 text-yellow-500"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">
                                Mantenimiento especializado
                            </h6>
                            <p className="text-sm text-gray-200">
                            Brindamos mantenimiento especializado para vehículos eléctricos, 
                            asegurando un rendimiento eficiente y sin emisiones. 
                            Tu movilidad eléctrica, en manos expertas.
                            </p>
                            <hr className="w-full my-6 border-gray-300" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-900">
                                <svg
                                    className="w-8 h-8 text-yellow-500"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">
                                Tambien para motocicletas y bicicletas electricas
                            </h6>
                            <p className="text-sm text-gray-200">
                            Espacios eléctricos para todos: espacios dedicados a motos y bicicletas
                            eléctricas. Transformamos tu movilidad con servicio especializado y ecoamigable.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <Image
                        className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                        src="/images/electrico1.jpeg"
                        alt="1"
                        width={1000}
                        height={1000}
                    />
                    <Image
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="/images/electrico2.jpeg"
                        alt="2"
                        width={1000}
                        height={1000}
                    />
                    <Image
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="/images/electrico3.jpeg"
                        alt="3"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    );
};