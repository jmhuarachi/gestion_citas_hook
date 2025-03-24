export default function CalendarioCitas({ listadDeCitas , cancelarCita}) {
    return (
        <>
            <div>
                <div className="bg-cyan-300 rounded-lg text-center">
                    <h2 className="p-4 m-10 font-bold">Programacion de Citas Medicas</h2>
                </div>
                <div className="bg-lime-300 p-4 m-2 text-center rounded-lg">
                    <h3 className="font-semibold mb-5">Citas Disponible: </h3>
                    {listadDeCitas.map(cita => (
                        <div key={cita.id} className="bg-lime-200 p-4 m-2 text-center rounded-lg flex justify-center items-center">
                            <p>{`${cita.date} - ${cita.time } - ${cita.available ? 'Disponible':''}`}</p>
                            {!cita.available && (<button 
                                                        cancelarCita={cancelarCita}
                                                        onClick={()=>cancelarCita(cita.id)}
                                                        className="bg-red-500 text-white p-2 rounded-lg">Cancelar</button>)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}