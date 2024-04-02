import React, { useState } from 'react';

export default function Comunication(){

    const [ilustration, setIlustration] = useState(2);

    const ilustrations = [
        {url: 'https://th.bing.com/th/id/OIP.O7RBKqz1gLjk6EyibsAOPwHaHa?rs=1&pid=ImgDetMain'},
        {url: 'https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Ftab%2Ftabs-02.jpg&w=1080&q=75'},
        {url: 'https://img.freepik.com/free-vector/international-trade-concept-illustration_114360-9661.jpg'}
    ]

    const changeIlustration = (val) => {
        setIlustration(val);
    }

    const [name, setName] = useState(null); // Nombre
    const [number, setNumber] = useState(null); // Phone

    const changeValor = (type, val) => {
        if(type == 'name'){
            setName(val);
        }else if(type == 'number'){
            setNumber(val);
        }
    }

    const sendComunication = () => {
        if(name && number){
            // Aca la función para ejecutar
            setName('Enviado...');
        }
    }
    return (
        <div className='comunication'>
            <div className="homeComunication">
                <div className='containerHome'>

                    <div className='leftContainer'>
                        <div className='containerInfoHome'>
                            <div className='btnTitle'>
                                <button>
                                    <span>
                                        ¡Nuevo!
                                    </span>
                                </button>
                            </div>
                            <div className='titleBig'>
                                <h1>
                                    ¡Comunicación! Ahí esta la clave...
                                </h1>
                                <span>
                                    Gana terreno y confianza en tu sector. Nosotros nos encargamos de transmitir lo que tienes al mundo.
                                </span>
                            </div>

                            <div className='smallStars'>
                                <div className='box'>
                                    <div className='stars'>
                                        <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/icons/rating.png" alt="" />
                                    </div>    
                                    <div className='lateral'>
                                        <div className='imgs'>
                                            <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient-03.5b697b14.png&w=64&q=75" alt="" />
                                            <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient-03.5b697b14.png&w=64&q=75" alt="" />
                                            <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient-03.5b697b14.png&w=64&q=75" alt="" />
                                        </div>
                                        <div className='opi'>
                                            <h3>Más de 200 empresa comunicadas</h3>
                                            <span>Nuevas ideas, nuevas comunicaciones</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='RightForm'>
                        <div className='formDiv'>
                            <div className='titleCenter'>
                                <h2>¡Nosotros nos comunicamos contigo! {name}</h2>
                            </div>
                            <div className='containerForm'>
                                <div className='form'>
                                    <div className='inputDiv'>
                                        <input type="text" id="name" placeholder='Escribe tu nombre...'
                                        defaultValue={name} onChange={(e) => {
                                            changeValor('name', e.target.value)
                                        }} />
                                    </div>
                                    <div className='inputDiv'>
                                        <input type="text" placeholder='Escribe tu número de contacto...' 
                                        defaultValue={number} 
                                        
                                        onChange={(e) => {
                                            changeValor('number', e.target.value)
                                        }}/>
                                    </div>
                                    <div className='inputDivBtn'>
                                        <button onClick={() => sendComunication()}>
                                            <span>
                                                ¡Despeguemos!
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeSocialNetwork">
                <div className='containerSocialNetwork'>
                    <div className='listContainerNetwork'>
                        <div className='box'>
                            <div className='principalTitle'>
                                <div className='bigTitle'>
                                    <h1>Redes sociales, ¡Mejoremos la comunicación!</h1>
                                    <span>Aquí multiples opciones para mejorar en tu empresa.</span>
                                </div>
                                <div className='btn'>
                                    <button onClick={() => {
                                    document.getElementById('name').focus();
                                }}>
                                        <span>¡Comunicate con nosotros!</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='box Important ColorPrimary'>
                            <div className='containerBox'> 
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-01.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Administramos tu redes sociales</h3>
                                    <span>Pequeño texto que indique este box</span>
                                </div>
                            </div>
                        </div>
                        <div className='box Important ColorPrimary'>
                            <div className='containerBox'>
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-01.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Administramos tu redes sociales</h3>
                                    <span>Pequeño texto que indique este box</span>
                                </div>
                            </div>
                        </div>
                        <div className='box Important ColorOther'>
                            <div className='containerBox'>
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-02.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Administramos tu redes sociales</h3>
                                    <span>Pequeño texto que indique este box</span>
                                </div>
                            </div>
                        </div>

                        <div className='box Important ColorSecundary'>
                            <div className='containerBox'> 
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-01.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Administramos tu redes sociales</h3>
                                    <span>Pequeño texto que indique este box</span>
                                </div>
                            </div>
                        </div>
                        <div className='box Important ColorPrimary'>
                            <div className='containerBox'>
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-01.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Administramos tu redes sociales</h3>
                                    <span>Pequeño texto que indique este box</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='containerFixedBox'>
                <div className='containerFixed'>
                    <div className='titleAndDesc'>
                        <h1>Herramientas</h1>
                        <span>
                            En Noah, nos encanta trabajar con pasión desbordante, pero alineada con el orden y la presición de nuestra metodología. 
                            Nos alineamos con un gran avanico de oportunidades y sectores, para impulsar tu marca.
                        </span>
                    </div>
                
                    <div className='containersSmallOptions'>
                        <div className='boxSmall'>
                            <div className='titleDesc'>
                                <h1>
                                    Optimizando la conversación
                                </h1>
                                <span>
                                    Mejora la interacción con tus clientes y optimiza cada conversación para impulsar la satisfacción y lealtad del cliente, a través de nuestras soluciones especializadas en comunicación.
                                </span>
                            </div>
                        </div>

                        <div className='boxSmall'>
                            <div className='titleDesc'>
                                <h1>
                                    Inteligencia Artificial de tu lado
                                </h1>
                                <span>
                                    Aprovecha el poder de la inteligencia artificial para personalizar cada interacción con tus clientes, brindando respuestas rápidas y soluciones eficientes que superen sus expectativas.
                                </span>
                            </div>
                        </div>

                        <div className='boxSmall'>
                            <div className='titleDesc'>
                                <h1>
                                    Experiencia del cliente
                                </h1>
                                <span>
                                    Pon la experiencia del cliente en el corazón de tu negocio, ofreciendo soluciones y servicios diseñados para crear conexiones significativas y duraderas que impulsen el crecimiento y la fidelidad.
                                </span>
                            </div>
                        </div>

                        <div className='boxSmall'>
                            <div className='titleDesc'>
                                <h1>
                                    Escucha continua
                                </h1>
                                <span>
                                    Con nuestra plataforma de escucha continua, mantente siempre atento a las necesidades y comentarios de tus clientes, permitiéndote adaptarte y mejorar constantemente para ofrecer una experiencia excepcional.
                                </span>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            <div className='AboutServices'>
                <div className='containerServices'>
                    <div className='titleServices'>
                        <h1>Automatizando la comunicación</h1>
                        <span>
                            Simplifica la interacción con tus clientes al implementar soluciones de automatización de conversaciones que agilicen los procesos, mejoren la eficiencia y brinden respuestas rápidas y precisas las 24 horas del día.                        
                        </span>
                    </div>

                    <div className='sliderContainer'>
                        <div className='containerBoxs'>
                            <div className='left'>
                                <div className='containerLeft'>
                                    <div className={ilustration == '0' ? 'options Active' : 'options' } onClick={() => changeIlustration(0)} >
                                        <h3>Presencia Online</h3>
                                        <span>
                                            Gana presencia día a día en tus redes
                                        </span>
                                    </div>
                                    <div className={ilustration == '1' ? 'options Active' : 'options' } onClick={() => changeIlustration(1)} >
                                        <h3>Agilidad</h3>
                                        <span>
                                            Respuestas inmediatas e inteligentes para tus clientes. IA
                                        </span>
                                    </div>
                                    <div className={ilustration == '2' ? 'options Active' : 'options' } onClick={() => changeIlustration(2)} >
                                        <h3>Tu público ideal</h3>
                                        <span>
                                            Estudiamos tu marca, y te llevamos a tus potenciales clientes.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='rightWallpaper'>
                                <div className='containerWallpaper'>
                                    {
                                        ilustrations.map((ilu, i) => {
                                            if(i == ilustration){
                                                return (
                                                    <img src={ilu.url} alt="" />
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='comunicateHome'>
                <div className='containerComunicate'>

                    <div className='cont'>
                        <div className='wallp'>
                            <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree-shape.a94f3af1.png&w=640&q=75" alt="" />
                        </div>
                        <div className='form'>
                            <div className='titleDescComunicate'>
                                <h1>¡Llevemos hoy toda la comunicación a otro nivel!</h1>
                                <span>Incluye estudio detallado</span>
                            </div>
                            <div className='btn'>
                                <button onClick={() => {
                                    document.getElementById('name').focus();
                                }}>
                                    <span>¡Comunicarme!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}