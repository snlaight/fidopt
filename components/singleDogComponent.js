import React, {useState} from 'react';
import Link from 'next/link';

const SingleDogComponent = (props)=>{
  let dog = props.dog;
  let [perro, setPerro] = useState({
    _id: dog._id,
    nombre: dog.nombre,
    raza: dog.raza,
    edad: dog.edad,
    castrado: dog.castrado,
    chip: dog.chip,
    vacuna_antirrabica: dog.vacuna_antirrabica,
  });

  return (

    <div key={`perro-id-${perro._id}`} className="flex justify-center py-8 sm:px-6 px-4">
        <div className="max-w-sm w-full relative rounded shadow bg-white dark:bg-gray-800">
            <div className="absolute m-4 top-0 right-0">
                <div className="flex items-center justify-center flex-1 h-full bg-gradient-to-tl from-yellow-300 to-red-400 shadow-inner rounded">
                    <p className="sm:text-lg text-base py-2 px-4 font-semibold leading-5 text-center text-white">{dog.name}</p>
                </div>
            </div>
            <img src="https://i.ibb.co/7bkVjbt/image2.png" alt="protest" />
            <div className="py-6 px-6 flex md:items-center justify-between">
                <div>
                    <p className="sm:text-lg text-base font-semibold leading-5 text-gray-800 dark:text-gray-100">{dog.raza}</p>
                    <p className="sm:text-base text-sm leading-4 pt-3 text-gray-500 dark:text-gray-400">{dog.edad}</p>
                </div>
                <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Request</button>
            </div>
        </div>
    </div>

  )
  }

export default SingleDogComponent