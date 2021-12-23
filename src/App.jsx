import React, {useState, useEffect} from 'react'
import Header from "./components/Header"
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from "./components/Formulario"
import "./index.css"

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter( pacient => pacient.id !== id);
        setPacientes(pacientesActualizados)
    }

    useEffect(() => {
        //para cargar los datos de local storage
        const obtenerLocalStorage = ()=>{
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            console.log("local storage info:", pacientesLS)
            setPacientes(pacientesLS)
        }
        obtenerLocalStorage();

    }, [])

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))

    }, [pacientes])

    return (
        <div className="container mx-auto mt-20 ">
            <Header/>

            <div className="mt-12 md:flex">
                <Formulario
                    setPacientes={setPacientes}
                    pacientes={pacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    />
            </div>
        </div>
    )
}

export default App
