import React from 'react';
import { FiHeart } from "react-icons/fi";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Us(){

    const navigation = useNavigate();
    return (
        <div className='us'>
            <div className="homeUs">
                <div className='container'>
                    <div className='wallpaper'>

                    </div>
                    <div className='Box'>
                        <div className='txt'>
                            <div className='top'>
                                <button>
                                    <span>Nosotros</span>
                                </button>
                            </div>
                            <h1>Nos encantan los retos empresariales.  <br />
                                ¡Queremos llevar a nuevas empresas a otro nivel!
                            </h1>

                            <button className='contact' onClick={() => navigation('/contact')}>
                                <span>Contactarse</span>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='ourMision'>
                <div className='containerMision'>
                    <div className='containersPictures'>
                        <div className='imgLeft'>
                            <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-07.44839913.jpg&w=384&q=75" alt="" />
                        </div>

                        <div className='imgsRight'>
                            <div className='top'>
                                <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-09.4a7c17ad.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='bottom'>
                                <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-08.036064db.jpg&w=640&q=75" alt="" />
                            </div>
                        </div>
                    </div> 

                    <div className='boxDesc'>
                    <div className='boxs'>
                        <div className='top'>
                            <button>
                                <span>Nuestra misión</span>
                            </button>
                        </div>
                        <div className='title'>
                            <h1>Empoderar a empresas y emprendedores para alcanzar su máximo potencial</h1>
                            <h3>
                                Fortaleciendo su seguridad, aumentando sus ventas y mejorando la comunicación con sus clientes
                            </h3>
                        </div>

                        <div className='listOptionsSubMisiones'>
                            <div className='option'>
                                <div className='icon'>
                                    <button>
                                        <FiHeart className='iconD' />
                                    </button>
                                </div>
                                <div className='Desc'>
                                    <h3>Potenciar seguridad en sí mismos</h3>
                                    <span>
                                        Brindamos herramientas y capacitación para que tanto empresas como emprendedoresdesarrollen una mentalidad sólidad y confiada,
                                        permitiéndoles enfretar desafíos con determinación y autoconfianza.
                                    </span>
                                </div>
                            </div>
                            <div className='option'>
                                <div className='icon'>
                                    <button className='Impar'>
                                        <FiHeart className='iconD ' />
                                    </button>
                                </div>
                                <div className='Desc'>
                                    <h3>Impulsar el crecimiento de las ventas</h3>
                                    <span>
                                        Implementamos estrategías innovadoras y efectivas para aumentar el volumen de ventas, identificando oportunidades
                                        de mercado, optimizando procesos de ventas y proporcionando mayor engagement.
                                    </span>
                                </div>
                            </div>
                            <div className='option'>
                                <div className='icon'>
                                    <button>
                                        <FiHeart className='iconD' />
                                    </button>
                                </div>
                                <div className='Desc'>
                                    <h3>Mejorar la percepción de la marca</h3>
                                    <span>
                                        Trabajamos en el fortalecimiento y la proyección de la identidad de la marca, desarrollando estrategías de posicionamiento,
                                        comunicación y diseño que resalten sus valores y generen una conexión auténtica con su audiencia objetivo.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>

            <div className='ourVision'>
                <div className='containerVision'>
                    <div className='descriptionVision'>
                        <div className='vision'>
                            <div className='top'>
                                <button>
                                    <span>Nuestra visión</span>
                                </button>
                            </div>
                            <div className='title'>
                                <h1>Ser la 2da mejor en el mundo</h1>
                                <h3>
                                    Todos tenemos un referente que nos inspira, que nos motiva a ser mejores. En Noah no somos la excepción. Por esta razón,
                                    aspiramos a ser la número 2 en el mundo para el año 2030.
                                </h3>
                            </div>

                            <div className='listOptionsSubMisiones'>
                                <div className='option'>
                                    <div className='icon'>
                                        <button>
                                            <MdOutlineEmojiObjects className="iconD" />
                                        </button>
                                    </div>
                                    <div className='Desc'>
                                        <h3>Desbloquear un nuevo nivel</h3>
                                        <span>
                                            Colaborar con más de 100.000 empresas y emprendedores para alcanzar su máximo potencial.
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='imgWallpaper'>
                            <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-08.036064db.jpg&w=640&q=75" alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='subscription'>
                <div className='contextSubscription'>
                    <div className='containerSub'>
                        <div className='top'>
                            <button>
                                <span>
                                    Nuestro blog e información
                                </span>
                            </button>
                        </div>
                        <div className='title'>
                            <h1>
                                Suscribete y recibe nuestro contenido</h1>

                                <h3>
                                    En nuestro blog, te ofrecemos el conocimiento y las herramientas necesarias para potenciar tu seguridad,
                                    impulsar tus ventas y mejorar la percepción de tu marca. Aquí estamos para ayudarte. <br /><br />
                                    Lo mejor de todo, nuestro contenido es complemetamente <strong style={{fontWeight:'bold',fontStyle:'italic'}}>GRATIS.</strong>
                                </h3>
                        </div>
                        <div className='form'>
                            <div className='formWhite'>
                                <input type="text" placeholder='Ingresa tu correo' />
                                <button>
                                    <span>Suscribirme</span>
                                </button>
                            </div>

                            <div className='smallMessage'>
                                <span>Sin anuncios, sin pagos, sin bots</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}