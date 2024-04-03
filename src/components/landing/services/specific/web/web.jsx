import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdClose, MdComputer, MdWhatsapp } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import * as actions from '../../../../../actions';

export default function Web(){

    const [modal, setModal] = useState(false);
    const [type, setType] = useState(true);
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

    const [name, setName] = useState(null); // Nombre
    const [number, setNumber] = useState(null); // Phone
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);

    const changeValor = (type, val) => {
        if(type == 'name'){
            setName(val);
        }else if(type == 'number'){
            setNumber(val);
        }
    }

    const sendComunication = async () => {
        if(!loading){
            if(name && number){
                // Aca la función para ejecutar
                setLoading(true);
                const send =  await actions.IWannaComunicate(name, number, 'web')
                .then(res => {
                    setLoading(false);
                    setName(null);
                    setNumber(null);
                    document.querySelector("#name").value = '';
                    document.querySelector("#phone").value = '';

                    console.log(res);
                    if(res == 201){
                        setForm(true)
                    }else if(res == 200){
                        setForm(true)
                    }else{
                        setName('Ocurrio un error');
                        setForm(false);
                    }
                })
                .catch(err => {
                    setLoading(false);
                    return false;
                })
                
            }
        }
    }

    let mensaje =  `Hola, ¡Me gustaría obtener mi sitio web con ustedes!`;
    return (
        <div className='web'>
            {
                modal ?
                <div className='modal'>
                <div className='containerModal'>
                    <div className='box'>
                        <div className='header'>
                            <div className='nav'>

                                <div className='btn'>
                                    <button onClick={() => setModal(!modal)}>
                                        <MdClose className='icon' />
                                    </button>
                                </div>
                            </div>

                        </div>
                        {
                            type ?
                            <div className='containerBox'>
                            <div className='desc'>
                                <div className='bigTitle'>
                                    <h1>La mejor calidad para ti y tu negocio</h1>
                                </div>

                                <div className='posibility'>
                                    <div className='boxPrices'>
                                        <div className='price'>
                                            <span>Desde</span>
                                            <h3>400.000 <strong>COP</strong></h3>
                                        </div>
                                        
                                        <div className='listOptions'>
                                            <nav>
                                                <ul>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>Dominio gratis</span>
                                                    </li>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>4 Modificaciones gratuitas</span>
                                                    </li>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>Asesoría</span>
                                                    </li>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>Certificados SSL</span>
                                                    </li>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>Autoadministrable</span>
                                                    </li>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>Conexión redes sociales</span>
                                                    </li>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>Mantenimiento 6 meses gratis</span>
                                                    </li>
                                                    <li>
                                                        <FaCircleCheck className='icon' />
                                                        <span>Garantia</span>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className='btns'>
                                            <button onClick={() => {
                                                window.open('https://api.whatsapp.com/send?phone=+573212207563&text='+mensaje+'')
                                            }}>
                                                <span>¡Me interesa!</span>
                                                <MdWhatsapp className='icon' />

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        :
                        <div className='containerBox'>
                            <div className='desc'>
                                <div className='bigTitle'>
                                    <h1>¡Manifestemos esa idea juntos!</h1>
                                </div>

                                
                                <div className='formOption'>
                                    <div className='smallImg'>
                                        <img src="https://www.bitfire.com.mx/wp-content/uploads/2020/11/illus-webdesign-2-1.png" alt="" />
                                    </div>
                                    <div className='formsInputs'>
                                        <div className='inputDiv'>
                                            <input type="text" id="name" defaultValue={name} 
                                            onChange={(e) => {
                                                changeValor('name', e.target.value)
                                            }} onKeyPress={(e) => {
                                                if(e.code == 'Enter'){
                                                    console.log(e)
                                                    document.querySelector('#number').focus()
                                                }
                                            }} placeholder='Nombre' />
                                        </div>
                                        <div className='inputDiv'>
                                            <input type="text" id="phone" placeholder='Número de teléfono' 
                                            onChange={(e) => {
                                                changeValor('number', e.target.value)
                                            }} defaultValue={number} onKeyPress={(e) => {
                                                if(e.code == 'Enter'){
                                                    if(name && number){
                                                        sendComunication()
                                                    }
                                                }
                                            }}/>
                                        </div>
                                        <div className='inputDiv'>
                                            {
                                                form ?
                                                    <span>¡Gracias! Pronto nos pondremos en contacto contigo</span>
                                                :
                                                loading ?
                                                    <button >
                                                        <span>
                                                            Compartiendo datos...
                                                        </span>
                                                    </button>
                                                :
                                                <button  onClick={() => sendComunication()} >
                                                    <span>¡Comenzar!</span>
                                                </button>
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        }
                    </div>
                </div>
            </div>
            :null
            }
            <div className="homeWeb">
                <div className='seccion01'>
                    <div className='container'>
                        <div className='txtAndDesc'>
                            <div className='desc'>
                                <h1>Desarrollo y Diseño Web</h1>
                                <span>Trabajemos junto, y mostremosle al mundo de lo que eres capaz. </span>

                            </div>
                            <div className='btns'>
                                <button className='comunication' onClick={() => {
                                    setType(false);
                                    setModal(!modal)
                                }}>Me interesa</button>
                                <button className='price' onClick={() => {
                                    setType(true)
                                    setModal(!modal)
                                }}>Conocer precios</button>
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
                   
                        <button onClick={() => {
                                    setType(false);
                                    setModal(!modal)
                                }}>
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
                        <button onClick={() => {
                                    setType(false);
                                    setModal(!modal)
                                }}>
                            <span>¡Me interesa!</span>
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
                                <button onClick={() => {
                                    setType(false);
                                    setModal(!modal)
                                }}>
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