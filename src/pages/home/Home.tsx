import React from 'react';
import homeLogo from '../../assets/remedio.jpg'
import './Home.css';
import ListaCategorias from '../../components/listaCategorias/ListaCategorias';


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Sempre com as melhores drogas para a sua família!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Veja aqui</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              {/*<img src={remedio} alt="" className='w-2/3' />*/}
      
            </div>
          </div>
        </div>
      <ListaCategorias/>
      </>
    );
}

export default Home;