import React from 'react';
import Image from 'next/image'

export const Historia = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20 bg-gray-800">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white-400 sm:text-4xl sm:leading-none">
                Nostros como empresa
                <br className="hidden md:block" />
                y nuestros servicios
              </h2>
              <p className="text-base text-gray-200 md:text-lg">
              ¡Bienvenidos a nuestro espacio automotriz, 
              donde el cuidado y el rendimiento de tu 
              vehículo son nuestra prioridad número uno!
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4">
                  <Image
                    src="/images/personal.gif"
                    width={200}
                    height={200}
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Tu vehiculo siempre seguro.
                </h6>
                <p className="text-sm text-gray-100">
                Nos comprometemos a proporcionar un entorno 
                de cuidado que te brinde total tranquilidad
                con nuestro personal capacitado y listo para
                brindar nuestros servicios.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4">
                <Image
                    src="/images/ubicacion.gif"
                    width={200}
                    height={200}
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Nuestras ubicaciones estrategicas.
                </h6>
                <p className="text-sm text-white-900">
                Nuestros parqueaderos, autolavados y talleres mecánicos están 
                estratégicamente distribuidos en áreas clave de la ciudad 
                para garantizar que siempre estemos a tu alcance.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="/images/historianos.jpeg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };