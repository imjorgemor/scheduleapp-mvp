import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


    return (
        <aside className="md:w-1/2 lg:w-3/5">
            <div >
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                </p>
            </div>
            <div className="md:h-screen overflow-y-scroll">
                {
                    pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />

                    ))
                }

            </div>
        </aside>
    )
}

export default ListadoPacientes
