import { useEffect } from "react"
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {
  
  useEffect(() => {
    if(pacientes.length > 0) {
      console.log('Nuevo Paciente')
    }
    
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes && pacientes.length ?(
        < > 
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>{" "}
            <h2 className="font-black text-3xl text-center">
                Listado Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>     
  
            {pacientes.map( (paciente) => (
                 <Paciente 
                  key={paciente.id}           
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                  />
                ))}
        </>
     ):(
        < >
          <h2 className="font-black text-3xl text-center">
                No hay pacientes           
          </h2>
            <p className="text-xl mt-5 mb-10 text-center">
             Comienza agregando a tus{' '}
            <span className="text-indigo-600 font-bold">Pacientes</span>
            </p>     
        </>
        ) 
      }
      
   

    </div>
  )
}

export default ListadoPacientes