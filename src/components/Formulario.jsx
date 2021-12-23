import React, { useEffect, useState } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
           setNombre(paciente.nombre);
           setPropietario(paciente.propietario)
           setEmail(paciente.email)
           setDate(paciente.date)
           setSintomas(paciente.sintomas)
        } else {
            console.log("no hay nada")
        }

    }, [paciente])



    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }

    const handleSubmit = (e) => {
        // prevenir actuación default del botton
        e.preventDefault();
        //validacion del formulario
        if ([nombre, propietario, email, date, sintomas].includes("")) {
            console.log("faltan campos")
            setError(true)
            return
        }
        setError(false)

        //crear objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            date,
            sintomas,
        }

        if(paciente.id){
            //editando registro
            objetoPaciente.id = generarId();
           
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

            setPacientes(pacientesActualizados);
            //reiniciamos el paciente a actualizar en memoria
            setPaciente({})
           
        } else {
            //nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }

        //reiniciar el form
        setNombre("")
        setPropietario("")
        setEmail("")
        setDate("")
        setSintomas("")
    }



    return (
        <div className="md:w-1/2 lg:w-2/5 mt-3 mx-5">
            <h2 className="font-black text-3xl text-center">Formulario</h2>

            <p className="text-lg mt-5 text-center mb-7">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-md py-10 px-5 mb-10"
                onSubmit={handleSubmit}
            >
                {error &&
                    <Error
                        mensaje="todos los campos son obligatorios"
                    />
                }

                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercadse font-bold">Nombre Mascota {nombre}</label>
                    <input
                        id="mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-200 rounded-md"
                        type="text"
                        placeholder="nombre de la mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercadse font-bold">Nombre Propietario</label>
                    <input
                        id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-200 rounded-md"
                        type="text"
                        placeholder="nombre del propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercadse font-bold">Email Contacto</label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-200 rounded-md"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercadse font-bold">Fecha registro</label>
                    <input
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-200 rounded-md"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="description"
                        className="block placeholder-indigo-200 uppercadse font-bold">Síntomas</label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-indigo-200 rounded-md"
                        id="description"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />

                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-all"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario
