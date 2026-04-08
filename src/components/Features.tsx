import { Smartphone, Car } from 'lucide-react';

function Features() {
    return (
        <section className="h-auto py-18 w-full flex flex-col justify-center items-center mb-4 bg-[#f9fafb]">
            <ul className="list-disc flex flex-col gap-22 md:flex-row">
                <li className='bg-white list-none w-48 py-12 px-4 border border-gray-200 rounded-lg flex flex-col gap-2 items-center shadow-sm hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out'>
                    <Smartphone size={64} />
                    <span>App Mobile</span>
                </li>
                <li className='bg-white list-none w-48 py-12 px-4 border border-gray-200 rounded-lg flex flex-col gap-2 items-center text-center shadow-sm hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out'>
                    <Car size={64} />
                    <span>Engenharia de Software de mobilidade</span>
                </li>
            </ul>
        </section>
    )
}

export default Features;