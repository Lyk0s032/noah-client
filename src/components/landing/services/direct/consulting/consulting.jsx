import React, { useState } from 'react';

export default function Consulting(){


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
        <div className="comunication">
            <div className="homeComunication">
                <div className='containerHome'>

                    <div className='leftContainer'>
                        <div className='containerInfoHome'>
                            <div className='btnTitle'>
                                <button>
                                    <span>
                                        ¡Primera consulta 100% gratuita!
                                    </span>
                                </button>
                            </div>
                            <div className='titleBig'>
                                <h1>Consultoría integral externa para tu negocio</h1>
                                <span>
                                    Contamos con expertos en diversas áreas del mercado, que pueden ayudarte a tomar las mejores decisiones y estrategías para subir al próximo nivel.
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
                                            <h3>+215 empresas auditoriadas</h3>
                                            <span>Actualmente</span>
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
                                    <h1>¡Tomemos las mejores decisiones juntos!</h1>
                                    <span>Ponemos a tu disposición diferentes expertos que te permitan llegar una mejor conclusión</span>
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
                                    <h3>Comunicación en linea</h3>
                                    <span>Reunionete con los mejores a través de tu móvil o laptop</span>
                                </div>
                            </div>
                        </div>
                        <div className='box Important ColorPrimary'>
                            <div className='containerBox'>
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-01.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Te conectamos</h3>
                                    <span>Te ponemos en contacto con otros casos de éxito en tu sector. ¡La inspiración continua nos apasiona!</span>
                                </div>
                            </div>
                        </div>
                        <div className='box Important ColorOther'>
                            <div className='containerBox'>
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-02.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Recomendado para ti</h3>
                                    <span>
                                       Si no sabes que camino seguir, si impulsar tus ventas, la comunicación o quizás la automatización. En Noah realizamos un estudio de tu mercado, para ayudarte a decidir.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='box Important ColorSecundary'>
                            <div className='containerBox'> 
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-01.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Ventas</h3>
                                    <span>
                                        Nuestros expertos te guiarán sobre las mejores estrategías o caminos a seguir para aumentar tu tráfico en internet y al mismo tiempo tus ventas. <br /><br />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='box Important ColorPrimary'>
                            <div className='containerBox'>
                                <div className='iconBig'>
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fshape%2Fservice-01.png&w=64&q=75" alt="" />
                                </div>
                                <div className='titleSmall'>
                                    <h3>Automatización</h3>
                                    <span>
                                        Antes de comenzar con tu proceso de automatización interna, comunicate con nuestros expertos. Juntos observaremos las mejores estrategías para hacer un cambio gradual  efectivo.
                                    </span>
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
                                <h1>¡Consultoría personalizada!, tus tiempos y metas son nuestra prioridad</h1>
                                <span>Incluye una sección gratuita</span>
                            </div>
                            <div className='btn'>
                                <button onClick={() => {
                                    document.getElementById('name').focus();
                                }}>
                                    <span>¡Comenzar!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}