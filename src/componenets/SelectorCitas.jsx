export default function SelectorCitas({ listadDeCitas, seleccionarCita, selectCita, reservarCita ,reseterFormulario}) {
    return (
        <>
            <div className="bg-rose-400 m-10 p-4 rounded-lg">
                <label htmlFor="citas" className="block text-center font-semibold text-gray-800 mb-5">Seleccione una Cita:</label>
                <select
                    id="citas"
                    value={seleccionarCita}
                    onChange={(e) => selectCita(Number(e.target.value))}

                    className="block mx-auto px-3 py-2 bg-white rounded-b-md shadow-sw focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    {listadDeCitas.map((cita) => (
                        <option
                            key={cita.id}
                            value={cita.id}
                            disabled={!cita.available}
                        >
                            {`${cita.date},${cita.time},${cita.available ? 'Disponible' : 'No Disponible'}`}</option>
                    ))}
                </select>
            </div>
            <div className="bg-green-400 m-10 p-4 rounded-lg">
                <button

                    onClick={() => reservarCita(seleccionarCita.id)}
                    className="bg-slate-500 px-2 py-1 ml-4 text-white rounded-lg">
                    Reservar Cita
                </button>
                <button 
                    onClick={reseterFormulario}
                className="bg-red-600 px-2 py-1 ml-4 text-white rounded-lg">
                    Recervar formulario
                </button>
            </div>
        </>
    )
}
