import React, { useState } from 'react';

import { FaCheckCircle, FaCodepen, FaCompress, FaThermometer, FaThermometerEmpty } from "react-icons/fa";
import { IoKeypadOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function AutomatizacionServices(){
    // Navegación
    const navigation = useNavigate();
    const [method, setMethod] = useState(0);

    const methods = [
        {name: 'Redefinir Objetivos en el tiempo', img: 'https://rainbowthemes.net/splash/react/histudy/assets/images/splash/courses-layout.png'},
        {name: 'Puntos clave', img:''},
        {name:'Medición', img:''},
        {name: 'Implementación', img:''}
    ]

    const changeMethod = (val) => {
        setMethod(val);
    }
    return (
        <div className='automatizacion'>
            <div className='homeAutomation'>
                <div className='Description'>
                    
                    <div className='title'>
                        <h1>
                            Automatización
                        </h1>
                    </div>
                    <div className='desc'>
                        <span>Llevamos los procesos de tu empresa otro nivel. Haciendo más efectivas tus operaciones. </span>
                    </div>
                    <div className='btn'>
                        <button onClick={() => navigation('/contact')}>
                            <span>¡Despeguemos!</span>
                        </button>
                    </div>
                </div>

                <div className='wallpaper'>
                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/agencia-marketing-automation-valencia.jpg" alt="" />
                </div>
            </div>

            <div className='goodOptions'>
                <div className='containerGood'>
                    <div className='title'>
                        <h1>Beneficios de la automatización</h1>
                    </div>

                    <div className='containerBox'>
                        <div className='container'>
                            <div className='optionGood'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Mayor productividad</h1>
                                    <h3>
                                        La relación correcta entre la máquina y el hombre permite un mayor rendimiento en el día a día.
                                    </h3>
                                </div>
                            </div>
                            <div className='optionGood'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Menos posibles errores</h1>
                                    <h3>
                                        La probabilidad de encontrar o cometer errores en los procesos, disminuye drásticamente con la automatización.
                                    </h3>
                                </div>
                            </div>
                            <div className='optionGood Color'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Comunicación interna</h1>
                                    <h3>
                                        Con ayuda de la IA e Ingeniería de Software, la comunicación interna reduce la subjetividad del mensaje.
                                    </h3>
                                </div>
                            </div>
                            <div className='optionGood Color'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Sistemas integrados</h1>
                                    <h3>Unificar tareas o procesos a través de la automatización. Utilizando recursos informaticos para enlazar procesos.</h3>
                                </div>
                            </div>
                            <div className='optionGood'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Reducción de costos</h1>
                                    <h3>
                                        En la medida que se reduce la presencia de errores y el tiempo de operación, los costos se reducen proporcionalmente.
                                    </h3>
                                </div>
                            </div>
                            <div className='optionGood'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Ambiente laboral</h1>
                                    <h3>
                                        Permite que los grupos de trabajo se enfoquen en las tareas significativas, donde el talento y la pasión sean los pilares del éxito.
                                    </h3>
                                </div>
                            </div>
                            <div className='optionGood Color'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Medición exacta</h1>
                                    <h3>
                                        Controla los tiempos de producción y desarrollo de una forma más predecible y acertada.
                                    </h3>
                                </div>
                            </div>
                            <div className='optionGood Color'>
                                <div className='drawTips'>
                                    <img src="https://neuronadigital.es/wp-content/uploads/2020/12/icono-tiempo.jpg" alt="" />
                                </div>
                                <div className='titleAndDesc'>
                                    <h1>Tu empresa</h1>
                                    <h3>
                                        Toda tu empresa y tus proyectos organizables desde tu teléfono móvil o laptop. 
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='componentMethods'>
                <div className='containerMethods'>

                    <div className='header'>
                        <div className='top'>
                            <button>
                                <span>Nuestra metodología</span>
                            </button>

                            <div className='titleSeccion'>

                                <h1>¡Conoce nuestra metodología <strong>De Acción</strong></h1>
                                <span>Llevamos un empresa a un nuevo nivel, a través de un plan de acción adaptado a tus necesidades.</span>
                            </div>
                        </div>
                    </div>

                    <div className='slidersAndOptions'>
                        <div className='box-container'>
                            <div className='leftOptions'>
                                <div className='onTop'>
                                    <button>
                                        <span>Todo a tu alcance</span>
                                    </button>

                                    <div className='smallText'>
                                        <h1>¡Perfecto! Vamos por ese nuevo nivel.</h1>
                                    </div>
                                    
                                </div>
                                
                                <div className='optionsMain'>

                                    <div className='option' onClick={() => changeMethod(0)}>
                                        <div className='containerOption'>
                                            <div className='icon'>
                                                <FaCodepen className='iconD' />
                                            </div>
                                            <div className='Text'>
                                                <h3>Redefinir objetivos en el tiempo</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='option' onClick={() => changeMethod(1)}>
                                        <div className='containerOption'>
                                            <div className='icon'>
                                                <IoKeypadOutline className='iconD' />
                                            </div>
                                            <div className='Text'>
                                                <h3>Puntos clave</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='option' onClick={() => changeMethod(2)}>
                                        <div className='containerOption'>
                                            <div className='icon'>
                                                <FaThermometerEmpty className='iconD' />
                                            </div>
                                            <div className='Text'>
                                                <h3>Medición</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='option' onClick={() => changeMethod(3)}>
                                        <div className='containerOption'>
                                            <div className='icon'>
                                                <FaCompress className='iconD' />
                                            </div>
                                            <div className='Text'>
                                                <h3>Implementación</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='wallpaperExplication'>
                                <div className='boxContainer'>
                                    {
                                        methods.map((meth, i) => {
                                            if(i == method){
                                                return (
                                                    <img src={meth.img} alt="" />
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='bottomGreen'>
                            <nav>
                                <ul>
                                    <li>
                                        <div>
                                            <FaCheckCircle className="icon" />

                                            <strong>Analisís gratuito</strong>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div>
                                            <FaCheckCircle className="icon" />

                                            <strong>Garantia por 2 años</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCheckCircle className="icon" />

                                            <strong>Asesoría continua</strong>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className='whyUsSeccion'>
                <div className='containerWhyUs'>
                    <div className='wallpaper'>
                        <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fabout%2Fabout-06.png&w=640&q=75" alt="" />
                    </div>
                    <div className='InfoContainer'>
                        <div className='top'>
                            <span>¿Por qué elegirnos?</span>
                        </div>
                        <div className='response'>
                            <h1>Nuestro proposito es hacer de este mundo, un lugar mejor</h1>

                            <h3>Y nuestra mejor opción, es aportando valor al mundo ofreciendo lo que mejor sabemos hacer.
                                Llevar empresas a otro nivel
                            </h3>

                            <div className='btn'>
                                <button onClick={() => navigation('/contact')}>
                                    <span>
                                        Contacta con nosotros
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}