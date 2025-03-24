import { useEffect, useState } from "react"
import { citas_db } from "../data/citas_db.js"
export default function useCitas() {
    const [listadDeCitas, SetListaDeCitas] = useState(() => {
        const guardarcitas = localStorage.getItem('listadDeCitas')
        return guardarcitas ? JSON.parse(guardarcitas) : citas_db
    })

    const [seleccionarCita, setSeleccionarCita] = useState('')
    const selectCita = (id) => {
        const citaSelect = listadDeCitas.find(cita => cita.id === id)
        setSeleccionarCita(citaSelect)
        console.log("Cita Seleccionada", citaSelect)
    }
    const actualizarCitas = (id, available) => {
        const updateCita = listadDeCitas.map(cita => cita.id === id ? { ...cita, available } : cita)
        SetListaDeCitas(updateCita)


    }
    const reservarCita = (id) => {
        actualizarCitas(id, false)
    }
    const cancelarCita = (id) => {
        actualizarCitas(id, true)
    }
    const resetFormulario = () => {
        SetListaDeCitas(citas_db)
        setSeleccionarCita('')
    }
    useEffect(() => {
        localStorage.setItem('listadDeCitas', JSON.stringify(listadDeCitas))
    }), [listadDeCitas];
    return {
        listadDeCitas,
        seleccionarCita,
        selectCita,
        reservarCita,
        cancelarCita,
        resetFormulario

    }
}