import { useState, useEffect } from 'react';
import Error from './Error';


const Formulario = ({setPacientes,pacientes, paciente, setPaciente}) => {
  const [nombre, setNombre]= useState('');
  const [raza, setRaza]= useState('');
  const [tipoRaza, setTipoRaza]= useState('');
  const [peso, setPeso]= useState('');
  const [propietario, setPropietario]= useState('');
  const [email, setEmail]= useState('');
  const [fecha, setFecha]= useState('');
  const [sintomas, setSintomas]= useState('');

  const [error, setError]= useState(false);

  useEffect(()=> {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setRaza(paciente.raza);
      setTipoRaza(paciente.tipoRaza);
      setPeso(paciente.peso);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }

  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

const handleSubmit = (e) => {
      e.preventDefault();
      // Validar Formulario
      if([nombre,raza,tipoRaza,peso,propietario,email,fecha,sintomas].includes('')){
        setError(true);
      } else {
        setError(false);
      }
      // Crear objeto de paciente
      const objetoPaciente = {
        nombre,
        raza,
        tipoRaza,
        peso,
        propietario,
        email,
        fecha,
        sintomas,
      };

      if(paciente.id) {
        // Editando Registro
        objetoPaciente.id = paciente.id;

        const pacientesActualizados = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

        setPacientes(pacientesActualizados);
        setPaciente({});
      }else{
        // Agregando Registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);

      }



      // Reiniciar el formulario
      setNombre('');
      setRaza('');
      setTipoRaza('');
      setPeso('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
} 

return (
    <div className='md:w-1/2 md:mb-3 lg:w-2/5 mx-5 mb-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='mt-5 text-center text-lg mb-10'>Añade pacientes y {''}  
        <span className='text-indigo-600 font-bold text-lg'>Administralos</span></p>

        <form onSubmit={handleSubmit} 
              className='bg-white shadow-md rounded-lg py-10 px-10 ' >
              {/* mensaje de error */}

              {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}
                
            <div className='mb-5'>
                <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                  Nombre de Mascota
                </label>
                <input 
                id='mascota'
                type="text"
                placeholder='Nombre de Mascota'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor='raza' className='block text-gray-700 uppercase font-bold'>
                  Raza
                </label>
                <input 
                id='raza'
                type="text"
                placeholder='raza'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={raza}
                onChange={(e) => setRaza(e.target.value)}
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor='tipo_de_raza' className='block text-gray-700 uppercase font-bold'>
                  Tipo de raza
                </label>
                <select
                id='tipo_de_raza'
                type="text"
                placeholder='Tamaño de raza'
                className='bg-white border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={tipoRaza}
                onChange={(e) => setTipoRaza(e.target.value)}
                 >
                  <option value="Grande">Grande</option>
                  <option value="Mediana">Mediana</option>
                  <option value="Pequeña">Pequeña</option>
                 </select> 
            </div>
            <div className='mb-5'>
                <label htmlFor='peso' className='block text-gray-700 uppercase font-bold'>
                  Peso de Mascota
                </label>
                <input 
                id='peso'
                type="number"
                placeholder='Peso en Kg'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                  Nompre de Propietario
                </label>
                <input 
                id='propetiario'
                type="text"
                placeholder='Nombre del propietario'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                   Email
                </label>
                <input 
                id='email'
                type="email"
                placeholder='Email de contacto'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                   Alta
                </label>
                <input 
                id='alta'
                type="date"
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                   Sintomas
                </label>
                <textarea 
                name="" 
                id="sintomas"
                placeholder='Describe los sintomas'
                className='border-2 w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                >
                </textarea>
            </div>
            <input type="submit" className='bg-indigo-600 w-full p-3 text-white rounded-lg font-bold uppercase hover:bg-indigo-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50' value={paciente.id ? 'Editar cita' : 'Crear cita'} 
           />
        </form>
    </div>
  )
}


export default Formulario