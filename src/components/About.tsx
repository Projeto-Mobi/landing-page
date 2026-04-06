function About() {
    return (
        <div id="about" className="flex w-[75%] sm:w-[50%] m-auto flex-col gap-2">
            <div>
                <h2 className="self-start font-bold text-xl mb-2">Sobre nós</h2>
                <p className="text-justify">
                Somos um projeto mantido por estudantes e professores da FURG em uma iniciativa de código aberto e cooperação.
                O MobiFurg é uma plataforma 100% gratuita, com informações sobre o transporte na universidade como horários do transporte público,
                horários dos micro-ônibus e a possibilidade de solicitar e oferecer
                caronas solidárias dentro da universidade.
                </p>
            </div>
        </div>
    )
}

export default About;