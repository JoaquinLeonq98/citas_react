
function Paciente({paciente, setPaciente,eliminarPaciente}) {

  const handleEliminar = () =>{
    const respuesta = confirm ('Deseas eliminar paciente ?')

    if (respuesta) {
      eliminarPaciente(paciente.id)
    }
  }
  return (
  
        <div className="my-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{paciente.nombre}</span> 
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Raza: {''}
          <span className="font-normal normal-case">{paciente.raza}</span> 
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Tipo de Raza: {''}
          <span className="font-normal normal-case">{paciente.tipoRaza}</span> 
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Peso: {''}
          <span className="font-normal normal-case">{paciente.peso}</span> 
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{paciente.propietario}</span> 
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{paciente.email}</span> 
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{paciente.fecha}</span> 
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{paciente.sintomas} </span> 
        </p>

        <div className="flex justify-between mx-10">
          <button 
              type="button"
              className="py-2 px-10 bg-indigo-600 text-white font-bold uppercase text-xs rounded-lg mt-3 inline-block hover:bg-indigo-700"
              onClick={() => setPaciente(paciente)}
               >
            Editar
          </button>
          <button 
          type="button"
          className="py-2 px-10 bg-red-600 text-white font-bold uppercase text-xs rounded-lg mt-3 inline-block hover:bg-red-700"
          onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
        
        </div>
  )
}

export default Paciente