import { Link } from 'react-router-dom';
import {
    ArrowIcon,
    PlusIcon,
    PrestIcon,
    SearchIcon
} from '../../assets';
import hero from '../../assets/hero.png';

export const HomeView = () => 
<div className='mx-auto' style={{ width: '768px' }}>
    <main className='text-center flex flex-col items-center'>
        <div className='py-6'>
            <figure className='' style={{ width: '600px' }}>
                <img className='w-full' src={hero} alt='imagen' />
            </figure>
        </div>
        <h2 className='font-bold text-4xl'>
            Gestor de Reuniones
        </h2>
        <h3 className='w-3/4 py-12 font-bold text-xl text-gray-400'>
            Gestiona y consulta tus reuniones de una manera sencilla y eficiente.
        </h3>
        <div className=''>
            <Link className='btn-landing bg-sky-700 py-3 px-24 rounded-md text-white items-center flex gap-3'>Iniciar consulta <ArrowIcon /></Link>
        </div>
    </main>
    <section className='my-24 flex gap-4'>
        <article className='flex flex-col items-center text-center text-gray-500 w-2/6'>
            <PlusIcon />
            <h4 className='text-lg py-3 text-black font-bold'>Crea registros</h4>
            <p className='text-md text-black'>ReuAPP te permite crear y gestionar tus registros.</p>
        </article>
        <div style={{ borderRight: '1px solid #eee' }}></div>
        <article className='flex flex-col items-center text-center text-gray-500 w-2/6'>
            <SearchIcon />
            <h4 className='text-lg py-3 text-black font-bold'>Busca tus reuniones</h4>
            <p className='text-md text-black'>ReuAPP te permite buscar reuniones asociadas a tu información.</p>
        </article>
        <div style={{ borderRight: '1px solid #eee' }}></div>
        <article className='flex flex-col items-center text-center text-gray-500 w-2/6'>
            <PrestIcon />
            <h4 className='text-lg py-3 text-black font-bold'>Genera reportes</h4>
            <p className='text-md text-black'>ReuAPP te permite generar reportes sobre fechas determinadas.</p>
        </article>
    </section>
</div>