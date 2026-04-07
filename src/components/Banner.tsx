import logo from '/logo.png';
import playStore from '/play-store.png';
import appStore from '/app-store.png';

function Banner() {
    return (
        <section id='beginning' className="h-screen flex flex-wrap justify-center gap-10 p-5 items-center w-full mb-4">
            <div className="text-center sm:text-justify">
                <div className="font-bold mb-4">
                    <p className="text-furg-yellow text-5xl">Carona ou ônibus</p>
                    <p className="text-orange-500 text-5xl">Partiu FURG!</p>
                </div>
                <div className="font-bold text-xl dark:text-white">
                    <p>Seu aplicativo de Mobilidade Universitária</p>
                    <p>Desloque-se na <span className="text-furg-orange">FURG</span> usando um app só!</p>
                </div>
            </div>
            <div>
                <img src={logo} className="w-40 rounded-2xl" />
            </div>
        </section>
    )
}

export default Banner;