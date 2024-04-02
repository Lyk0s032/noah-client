import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdComputer } from "react-icons/md";

export default function Web(){


    const [info, setInfo] = useState(0);

    const allInfo = [
        {name: 'La virtualidad a tu favor', 
        description: 'Aca la información sobre la parte de información necesaria',
        img: 'https://evolucionagencia.co/wp-content/uploads/2023/10/natha.png'
        },
        {name: 'Conectado experiencias...', 
        description: 'Aca la información sobre la parte de información necesaria',
        img: 'https://evolucionagencia.co/wp-content/uploads/2023/10/natha.png'
        },
        {name: 'Último recurso...', 
        description: 'Aca la información sobre la parte de información necesaria',
        img: 'https://evolucionagencia.co/wp-content/uploads/2023/10/natha.png'
        },
    ]
    
    const moveInformation = (move) => {
        if(move){
            if(info == allInfo.length -1){
                setInfo(0);
            }else{
                setInfo(info+1)
            }
        }else{
            if(info == 0){
                setInfo(allInfo.length - 1)
            }else{
                setInfo(info - 1)
            }
        }
    }
    return (
        <div className='web'>
            <div className="homeWeb">
                <div className='seccion01'>
                    <div className='container'>
                        <div className='txtAndDesc'>
                            <div className='desc'>
                                <h1>Desarrollo y Diseño Web</h1>
                                <span>Trabajemos junto, y mostremosle al mundo de lo que eres capaz. </span>

                            </div>
                            <div className='btns'>
                                <button className='comunication'>Me interesa</button>
                                <button className='price'>Conocer precios</button>
                            </div>
                        </div>
                        <div className='wallpaperImg'>
                            <img src="https://evolucionagencia.co/wp-content/uploads/2023/10/desarrollo-app.png" alt="" />
                        </div>
                    </div>
                </div>
 
            </div>
            <div className='otherHome'>
                <div className='containerOtherHome'>
                    <div className='wallpaperImg'>
                        <img src="https://evolucionagencia.co/wp-content/uploads/2023/10/SORA7.png" alt="" />
                    </div>
                    <div className='textAndDesc'>
                        <h1>Transforma tu presencia Online</h1>
                        <div className='line'></div>
                        <h3>
                            Potencia tu negocio en línea con nuestro equipo de desarrollo web. Desde sitios web elegantes hasta tiendas en línea dinámicas, te ayudamos a destacar en el mundo digital.
                        </h3>
                   
                        <button>
                            <span>Cuestiones</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='otherHome'>
                <div className='containerOtherHome Reverse'>
                    <div className='textAndDesc'>
                        <h1>Convierte visitantes en clientes</h1>
                        <div className='line'></div>
                        <h3>
                            Atrae, retén y convierte visitantes en clientes fieles con nuestras soluciones de desarrollo web. Desde un diseño intuitivo hasta una experiencia de usuario cautivadora, impulsamos tus conversiones.
                        </h3>
                        <button>
                            <span>Cuestiones</span>
                        </button>
                    </div>
                    <div className='wallpaperImg'>
                        <img src="https://res.cloudinary.com/imajin/image/upload/v1573808069/saas/desktop_illustration_ykznmj.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='homeWebListServices'>
                <div className='container'>
                    <div className='titleSeccion'>
                        <button>
                            <span>Para ti</span>
                        </button>

                        <div className='titleText'>
                            <h1>Incluimos una variedad para ti</h1>
                        </div>
                    </div>
                    <div className='containerOptions'>
                        <div className='options'>
                            <div className='img'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/bootstrap.png" alt="" />
                            </div>
                            <div className='desc'>
                                <h3>Dominio</h3>
                                <span>¡Gratis!</span>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='img'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/bootstrap.png" alt="" />
                            </div>
                            <div className='desc'>
                                <h3>Atención</h3>
                                <span>24 / 7</span>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='img'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/bootstrap.png" alt="" />
                            </div>
                            <div className='desc'>
                                <h3>Base de datos</h3>
                                <span>Disponible</span>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='img'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/bootstrap.png" alt="" />
                            </div>
                            <div className='desc'>
                                <h3>IA</h3>
                                <span>Adaptable</span>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='img'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/bootstrap.png" alt="" />
                            </div>
                            <div className='desc'>
                                <h3>Ecommerce</h3>
                                <span>A tu medida</span>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='img'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/bootstrap.png" alt="" />
                            </div>
                            <div className='desc'>
                                <h3>Seguridad</h3>
                                <span>24 / 7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='differentServicesForWebDesign'>
                <div className='title'>
                    <h1>
                        Servicios profesionales de diseño Web 
                    </h1>
                    <h3>Obten tu sitio en menos de una semana.</h3>
                </div>
                <div className='containerDifferent'>
                
                    {
                        allInfo.map((res, i) => {
                            if(i == info){
                                return (
                                    <div className='context'>

                                        <div className='infoBig'>
                                            <h1>{res.name}</h1>
                                            <h3>
                                                {res.description}
                                            </h3>
                                        </div>
                                        <div className='btns'>
                                            <button onClick={() => {
                                                moveInformation();
                                            }}>
                                                <MdChevronLeft className='icon' />
                                            </button>
                                            <button onClick={() => {
                                                moveInformation(true);
                                            }}>
                                                <MdChevronRight className='icon' />
                                            </button>
                                        </div>
                                    </div> 
                                )
                            }
                        })
                    } 
                    

                     
                    <div className='imgRelation'>
                        {
                            allInfo.map((res, i) => {
                                if(i == info){
                                    return (
                                        <img src={res.img} alt="" />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='componentBlueBig'>
                    <div className='wallpaperDiv'>
                        
                        <div className='containerInfoBlue'>
                            <div className='title'>
                                <h1>Hagamos esa idea una realidad</h1>
                                <h3>
                                    Si el resultado no es el esperado, ¡te devolvemos tu dinero!
                                </h3>
                            </div>

                            <div className='btn'>
                                <button>
                                    <span>¡Vamos!</span>
                                </button>
                            <br /><br />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}