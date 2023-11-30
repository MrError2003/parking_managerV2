"use client";
import { useState } from "react";
import { Nav } from "../components/Nav";
import { Ft } from "../components/Footer";

const EspacioEstacionamiento = ({
  numero,
  ocupado,
  seleccionado,
  onReservar,
}) => {
  let color;
  if (seleccionado) {
    color = "blue";
  } else if (ocupado) {
    color = "red";
  } else {
    color = "green";
  }

  return (
    <div
      className={`max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 flex flex-col justify-center items-center`}
      style={{
        width: "180px",
        height: "180px",
        backgroundColor: color,
        margin: "5px",
        textAlign: "center",
        lineHeight: "50px",
      }}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Espacio {numero}
      </h5>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-car-front-fill"
        viewBox="0 0 16 16"
        style={{
          margin: "5px",
          textAlign: "center",
        }}
      >
        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
      </svg>
      {!ocupado ? (
        <button
          onClick={onReservar}
          disabled={seleccionado}
          className="inline-flex items-center px-2 py-2 m-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {seleccionado ? "Reservado" : "Reservar"}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      ) : (
        <p className="text-sm text-gray-100 m-1">Espacio no disponible</p>
      )}
    </div>
  );
};

export default function Home() {
  const [espacios, setEspacios] = useState(Array(24).fill(false));
  const [espacioSeleccionado, setEspacioSeleccionado] = useState(null);

  const reservarEspacio = (index) => {
    const nuevosEspacios = [...espacios];
    nuevosEspacios[index] = true; // Marcar como ocupado
    setEspacios(nuevosEspacios);
    setEspacioSeleccionado(null);
  };

  return (
    <>
      <Nav />
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className="flex justify-center items-center px-2 py-2 bg-gray-800 w-full"
      >
        {espacios.map((ocupado, index) => (
          <EspacioEstacionamiento
            key={index}
            numero={index + 1}
            ocupado={ocupado}
            seleccionado={espacioSeleccionado === index}
            onReservar={() => reservarEspacio(index)}
          />
        ))}
      </div>
      <Ft />
    </>
  );
}