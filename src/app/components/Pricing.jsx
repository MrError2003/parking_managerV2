export const Planes = () => {
    return (
      <div className="bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white-100 uppercase rounded-full bg-teal-accent-400">
              Planes de Pago
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white-400 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Tarifas</span>
            </span>{' '}
            y planes mas populares.
          </h2>
          <p className="text-base text-white-700 md:text-lg">
            Aca estan los planes mas populares, pero si necesitas algo mas
            consulta en los establecimientos.
          </p>
          <br />
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-xl font-semibold text-gray-700">PLAN</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-4xl font-bold text-gray-700">SEMANAL</div>
              </div>
              <br />
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Estacioniamiento asignado.</div>
                <div className="text-gray-700">50% descuento en autolavado</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                80.000 COP
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                El servicio de mecanico no esta incluido.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
            <div className="absolute inset-x-0 top-[-1.5rem] flex justify-center -mt-3">
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
                Mas popular
              </div>
              
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">Mensual</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-4xl font-bold text-gray-700">200.000</div>
                <div className="text-gray-700">mensual</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">2 espacios asignados</div>
                <div className="text-gray-700">1 revision mecanica</div>
                <div className="text-gray-700">Autolavado gratis 2 veces al mes</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-blue-600 rounded shadow-md hover:bg-blue-900 focus:shadow-outline focus:outline-none"
              >
                Comprar
              </a>

              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Ten en cuenta que el lavado y mecanico debe ser reservado.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold text-black">Membresia anual</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold text-gray-700">1.100.000</div>
                <div className="text-gray-700">$</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">2 espacios asignados</div>
                <div className="text-gray-700">Revisión tecnicomecanica</div>
                <div className="text-gray-700">Grua de emergencia 24/7</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Comprar
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                La grua tiene covertura de maximo 20 kilometros.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };