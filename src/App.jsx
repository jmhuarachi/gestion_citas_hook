import CalendarioCitas from "./componenets/calendarioCitas"
import SelectorCitas from "./componenets/SelectorCitas"
import useCitas from "./hooks/useCitas"
function App() {

    const {
        listadDeCitas,
        seleccionarCita,
        selectCita,
        reservarCita,
        cancelarCita,
        resetFormulario
      }=useCitas()
    return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className='bg-yellow-200'>
        <h1 className='text-3xl font-bold text-center py-4 '>Gestion de Citas Medicas</h1>
        </header>
        <main className="flex-grow">
          <div className="bg-orange-300 flex justify-center items-center ">
              <CalendarioCitas
                listadDeCitas={listadDeCitas}
                cancelarCita={cancelarCita}
              />

          </div>
          <div className="bg-orange-300 flex justify-center items-center ">
              <SelectorCitas
                listadDeCitas={listadDeCitas}
                selectCita={selectCita}
                seleccionarCita={seleccionarCita}
                reservarCita={reservarCita}
                reseterFormulario={resetFormulario}
              />
          </div>
        </main>
        <footer className="bg-slate-400 flex justify-center items-center w-full py-8 mt-auto">
          <p>Todo los derechos recervados</p>
        </footer>
      </div>

    </>
  )
}

export default App
