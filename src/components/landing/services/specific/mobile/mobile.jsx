import React, { useState } from 'react';
import * as actions from '../../../../../actions';
import { MdClose } from 'react-icons/md';

export default function Mobile(){

    
    const [name, setName] = useState(null); // Nombre
    const [number, setNumber] = useState(null); // Phone
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);
    const [modal, setModal] = useState(false);

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
                const send =  await actions.IWannaComunicate(name, number, 'Desarrollo mobile')
                .then(res => {
                    setLoading(false);
                    setName(null);
                    setNumber(null);
                    document.querySelector("#name").value = name;
                    document.querySelector("#phone").value = number;

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
        <div className='mobile'>
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
                        
                    </div>
                </div>
                </div>
            :null
            }
            <div className='firstSeccion'>
                <div className='leftContain'>
                    <div className='containerDiv'>
                        <div className='titleAndDesc'>
                            <h1>Desarrollamos la app ideal para ti y <strong>tu negocio.</strong></h1>

                            <h3>Si lo tienes en tu mente, lo puedes tener en tu realidad. <br /><br /> Y también en...</h3>
                        </div>
                        <div className='avaliable'>
                            <button>
                                <img src="https://luxiren-mui5.vercel.app/images/mobile/app-store.png" alt="" />
                            </button>
                            <button>
                                <img src="https://luxiren-mui5.vercel.app/images/mobile/play-store.png" alt="" />
                            </button>
                        </div>
                        <div className='btns'>
                            <button onClick={() => {
                                    setModal(!modal)
                                }}>
                                <span>¡Me interesa!</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='right-div'>

                    <div className='wallpaperRight'>
                        <div className='imgWallpaper'>
                            <img src="https://res.cloudinary.com/imajin/image/upload/v1572031103/mobile/mobile_banner_tfoequ.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='twoParams'>
                <div className="titleSeccion">
                    <h1>Posibilidades</h1>
                </div>
                <div className='firstPosibility'>
                    <div className='img'>
                        <img src="https://res.cloudinary.com/imajin/image/upload/v1572099963/mobile/phone-left_mdthbj.png" alt="" />
                    </div>
                    <div className='txt'>
                        <div className='descAndTitle'>
                            <h1>Desarrollamos la app para tu empresa</h1>
                            <h3>Automatiza tus procesos, en Noah, desarrollamos la app que se adapte a las necesidades 
                                de tu empresa.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='firstPosibility Reverse'>
                    <div className='txt'>
                        <div className='descAndTitle'>
                            <h1>¿Quieres tu propia app para tu público?</h1>
                            <h3>
                                Nunca se sabe cual será la próxima gran idea. En Noah nos aseguramos que acercarte un paso más a tus sueños.
                            </h3>
                        </div>
                    </div>
                    <div className='img'>
                        <img src="https://mrkhadoliya.github.io/codehyphen.github.io/assets/img/mobile-design.png" alt="" />
                    </div>
                    
                </div>
            </div>

            <div className='herramientasCircleDivs'>

                <div className='someOptions'>
                    <div className='title'>
                        <button>
                            <span>Incluye</span>
                        </button>

                        <h1>Una conjunto de experiencias únicas</h1>
                    </div>
                    <div className='containerOptions'>
                        <div className='option Top'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/bootstrap.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Bootstrap</h3>
                                <span>CSS FRAMEWORK</span>
                            </div>
                        </div>
                        <div className='option Bottom'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/font.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Google Fonts</h3>
                                <span>CSS FRAMEWORK</span>
                            </div>
                        </div>
                        <div className='option Top'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/instagram.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Instagram</h3>
                                <span>Conexión</span>
                            </div>
                        </div>
                        <div className='option Bottom'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/support.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Soporte</h3>
                                <span>24 / 7</span>
                            </div>
                        </div>
                        <div className='option'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/isotop.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Ads</h3>
                                <span>Algunas estrategías</span>
                            </div>
                        </div>
                        <div className='option Bottom'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/animation.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Minimalista</h3>
                                <span>Altamente intuitivo</span>
                            </div>
                        </div>
                        <div className='option'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/popup.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Matenimiento</h3>
                                <span>3 meses gratis</span>
                            </div>
                        </div>

                        <div className='option'>
                            <div className='icon'>
                                <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/plugin/redux.png" alt="" />
                            </div>
                            <div className='titleAndDesc'>
                                <h3>Redux</h3>
                                <span>Rápido e imponente</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}