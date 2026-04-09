import { Smartphone, Car } from 'lucide-react';

function Features() {
    return (
        <section className="h-auto py-18 w-full flex flex-col justify-center items-center mb-4 bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.12),-0_-2px_8px_rgba(0,0,0,0.06)]">
            <ul className="list-disc dark:text-black flex flex-col gap-22 md:flex-row">
                <li className='bg-white dark:bg-[#16171d] list-none w-48 py-12 px-4 border border-gray-200 rounded-lg flex flex-col gap-2 items-center shadow-sm hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out'>
                    <Smartphone size={64} className='dark:text-white'/>
                    <span className='dark:text-white'>App Mobile</span>
                </li>
                <li className='bg-white dark:bg-[#16171d] list-none w-48 py-12 px-4 border border-gray-200 rounded-lg flex flex-col gap-2 items-center text-center shadow-sm hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out'>
                    <Car size={64} className='dark:text-white' />
                    <span className='dark:text-white'>Engenharia de Software de mobilidade</span>
                </li>
            </ul>
        </section>
    )
}

export default Features;