import React, { useState } from 'react';
import { MdClose, MdOutlineAddShoppingCart, MdOutlineAdsClick, MdOutlineAllInbox, MdOutlineAutoAwesomeMosaic, MdOutlineFilterCenterFocus, MdOutlineLibraryBooks, MdOutlineMenuBook } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";
import * as actions from '../../../../../actions';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function Sells(){
    // Navegación
    const navigation = useNavigate();
    const [opinion, setOpinion] = useState(0);
    
    const opiniones = [
        {
            img: 'https://theme-land.com/sapp/demo/assets/img/avatar/avatar-2.png',
            name:"Elizabeth Ulloa",
            message: "Este es el mensaje de activación ",
            ubication: "Cali, Colombia"
        },
        {
            img: 'https://theme-land.com/sapp/demo/assets/img/avatar/avatar-2.png',
            name:"Ximena Garcia",
            message: "Este es el mensaje de activación 2 ",
            ubication: "Bogota, Colombia"
        },
        {
            img: 'https://theme-land.com/sapp/demo/assets/img/avatar/avatar-2.png',
            name:"Sofia Enciso",
            message: "Este es el mensaje de sofía ",
            ubication: "Santiago, Chile"
        }
    ]

    const nextMessage = (type) => {

        if(type){
            if(opinion + 1 == opiniones.length){
                setOpinion(0)
            }else{
                setOpinion(opinion +1);
    
            }
        }else{
            if(opinion == 0){
                setOpinion(opiniones.length -1)
            }else{
                setOpinion(opinion - 1);
    
            }
        }
    }

    const [email, setEmail] = useState(null);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);

    const enterEmail = (mail) => {
        setEmail(mail);
    }

    const sendSubscription = async () => {
        if(email && !loading){
            setLoading(true);   
            const sending = await actions.IWannaSubscribe(email)
            .then(res => {
                setLoading(false);
                if(res == 201 || res == 200) return 201
            })
            .catch(err => {
                setLoading(false);
                return false
            });

            if(sending == 201){
                setForm(true)
            }else{
                setForm(false)
            }
        }
    }
    const [modal, setModal] = useState(null);
    const [name, setName] = useState(null); // Nombre
    const [number, setNumber] = useState(null); // Phone

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
                const send =  await actions.IWannaComunicate(name, number, 'Impulsar ventas')
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
        <div className='sells'>

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
            <div className='homeSells'>
                <div className='containerHome'>
                    <div className='leftContainerHome'>
                        <div className='leftContainer'>
                            <div className='titleStarst'>
                                <span>Stars</span>
                                <button>
                                    <span>4.3</span>
                                </button>

                                <button>
                                    <span>
                                        Noah
                                    </span>
                                </button>
                            </div>

                            <div className='titleAndDesc'>
                                <h1>
                                    ¡Ascendiendo a nuevos horizontes! 
                                </h1>

                                <span>
                                    Estamos comprometidos a impulsar las ventas de tu negocio. <br /><br />

                                    Difenciate de tus competidores y pon en marcha procesos que generen mayor engagement. 

                                </span>
                            </div>

                            <div className='btns'>
                                <button onClick={() => {
                                    setModal(!modal)
                                }}>
                                    <span>¡Comencemos!</span>
                                </button>

                                <button>
                                    <span>Video Watch</span>
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className='rightContainerHome'>
                        <div className='rightHome'>
                            <img src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FappModern%2Fbanner2.7d8b06b7ac27887ad6db77b32b84e776.png&w=1200&q=75" alt="" />
                        </div>
                    </div>
                </div>

            </div>


            <div className='sellsNoahWhyChooseOur'>
                <div className='containerWhyUs'>
                    <div className='titleAndDesc'>
                        <button>
                            <span>Impulsa tu ventas</span>
                        </button>

                        <h1>
                            ¿Por que escogernos?
                        </h1>
                    </div>

                    <div className='somesOptions'>
                        <div className='containerOptions'>
                            <div className='options'>
                                <div className='iconContainer'>
                                    <img src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FappModern%2Ficon1.c6727bf00268750482b8c323d158c144.svg&w=96&q=75" alt="" />
                                </div>
                                <div className='descTitle'>
                                    <h3>Estudio de mercado</h3>
                                    <span>Realizamos un estudio de tu mercado totalmente gratis antes de comenzar con la campaña. <br /><br />
                                    
                                    Nos gusta trabajar con los mejores.</span>
                                </div>
                            </div>

                            <div className='options'>
                                <div className='iconContainer'>
                                    <img src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FappModern%2Ficon1.c6727bf00268750482b8c323d158c144.svg&w=96&q=75" alt="" />
                                </div>
                                <div className='descTitle'>
                                    <h3>Precios accesibles</h3>
                                    <span>
                                        Trabajamos de la mano. Hacemos uso de multiples estrategías para mostrarle al mundo la verdadera escencia de tu negocio. <br /><br />
                                        ¡Cuidamos la imagen de tu empresa!
                                    </span>
                                </div>
                            </div>

                            <div className='options'>
                                <div className='iconContainer'>
                                    <img src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FappModern%2Ficon1.c6727bf00268750482b8c323d158c144.svg&w=96&q=75" alt="" />
                                </div>
                                <div className='descTitle'>
                                    <h3>¡Nos pagas al finalizar!</h3>
                                    <span>
                                        Nos pagas una vez obtenidos los resultados esperados. En Noah nos gusta trabajar con los mejores. <br /><br />

                                        ¡Resultados garantizados!
                                    </span>
                                </div>
                            </div>

                            <div className='options'>
                                <div className='iconContainer'>
                                    <img src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FappModern%2Ficon1.c6727bf00268750482b8c323d158c144.svg&w=96&q=75" alt="" />
                                </div>
                                <div className='descTitle'>
                                    <h3>¡Te enseñamos!</h3>
                                    <span>Trabajemos juntos. Te enseñamos nuestras estrategías para optimizar tus esfuerzos y potenciar tus ventas.</span>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homeOptionsDivide'>
                <div className='containerOptionsDivide'>
                    <div className='wallpaperImg'>
                        <img src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FappModern%2FappSlider2.422217a63783616bd4cb43a44e9b00cc.png&w=384&q=75" alt="" />
                   </div>

                    <div className='containerDescInfo'>

                        <div className='container'>
                            <div className='title'>
                                <h2>Nos enfocamos tus ventas</h2>
                                <span>
                                    Abrete a la posibilidad de llevar tu negocio al siguiente nivel. Potenciamos tu presencia en linea y aumentamos tus ventas de manera estrategíca, predecible y efectiva. 
                                </span>
                            </div>
                            <div className='optionsLists'>

                                <div className='optionsList'>
                                    <div className='icon'>
                                        <img src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/appModern/icon1.c6727bf00268750482b8c323d158c144.svg" alt="" />
                                    </div>
                                    <div className='desc'>
                                        <h3>Contenido digítal</h3>
                                        <span>Captemos la atención de tus potenciales clientes a través de contenido de alto valor.</span>
                                    </div>
                                </div>

                                <div className='optionsList'>
                                    <div className='icon'>
                                        <img src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/appModern/icon1.c6727bf00268750482b8c323d158c144.svg" alt="" />
                                    </div>
                                    <div className='desc'>
                                        <h3>Automatizamos la comunicación</h3>
                                        <span>Tus clientes tienen prisa, que no pierdan tiempo con conversaciones longevas</span>
                                    </div>
                                </div>

                                <div className='optionsList'>
                                    <div className='icon'>
                                        <img src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/appModern/icon1.c6727bf00268750482b8c323d158c144.svg" alt="" />
                                    </div>
                                    <div className='desc'>
                                        <h3>Creemos la confianza</h3>
                                        <span>Nos encargamos de posicionarte de forma que tus clientes cada día confien más en ti.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homeOptionsDivide'>
                <div className='containerOptionsDivide Complete'>
                    <div className='bigDesc'>
                        <div className='titleDesc'>
                            <button>
                                <span>
                                    Innovando el futuro
                                </span>
                            </button>

                            <div className='titleDiv'>
                                <h1>¡Nos pagas solo por los resultados!</h1>
                                <span>
                                    En Noah estamos convencidos de poder llevar tu negocio a otro nivel. Por esta razón, no te cobramos absolutamente nada al comenzar. Nos pagas solo al obtener tus primeros resultados. <br /><br />

                                    Lo mejor, para los mejores.
                                </span>
                            </div>
                        </div>

                        <div className='btns'>
                            <button onClick={() => {
                                    setModal(!modal)
                                }}>
                                <span>Prueba gratis</span>
                            </button>
                        </div>
                    </div>
                    <div className='bigWallpaper'>
                        <div className='container'>
                        <img src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FappModern%2Fdashboard.4de96a643faea1f7394f8b14a80890ad.png&w=1080&q=75" alt="" />

                        </div>
                    </div>

                    
                </div>
            </div>

            <div className='homeSellIncluded'>
                <div className='includesDivide'>
                    <div className='title'>
                        <h1>
                            Pequeños pasos, resultados gigantes.
                        </h1>
                        <span>
                            Creemos que el orden, la disciplina y la constancia son las claves del éxito. Por esta razón diversificamos nuestro estilo de trabajo para obtener mejores resultados en tiempos increibles. Haciendo presencia en: 
                        </span>
                    </div>

                    <div className='divide'>
                        <div className='VigeOptions'>
                            <div className='option'>
                                <div className='icon'>
                                    <img src="https://theme-land.com/sapp/demo/assets/img/icon/featured-img/layers.png" alt="" />
                                </div>
                                <div className='DescTitle'>
                                    <h1>Redes sociales</h1>
                                    <span>
                                        Diseñamos las redes sociales a la medida. Para que tus clientes sepan lo que realmente haces y lo que representas
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <img src="https://theme-land.com/sapp/demo/assets/img/icon/featured-img/layers.png" alt="" />
                                </div>
                                <div className='DescTitle'>
                                    <h1>Comunicaciones</h1>
                                    <span>
                                        No importa cuan bueno sea tu producto o servicio, si la comunición no es eficaz, no tendrás los resultados esperados. <br /><br />Nosotros nos encargamos.
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <img src="https://theme-land.com/sapp/demo/assets/img/icon/featured-img/layers.png" alt="" />
                                </div>
                                <div className='DescTitle'>
                                    <h1>Contenido digítal</h1>
                                    <span>
                                        Captemos la atención de tu audiencia con contenido de alta calidad. 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='VigeOptions'>
                            <img src="https://theme-land.com/sapp/demo/assets/img/features/thumb-1.png" alt="" />
                        </div>
                        <div className='VigeOptions'>
                            <div className='option'>
                                <div className='icon'>
                                    <img src="https://theme-land.com/sapp/demo/assets/img/icon/featured-img/layers.png" alt="" />
                                </div>
                                <div className='DescTitle'>
                                    <h1>Embudos de ventas</h1>
                                    <span>
                                        Creamos llamados a la acción para tus posibles clientes,  ¡Irresistibles! 
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <img src="https://theme-land.com/sapp/demo/assets/img/icon/featured-img/layers.png" alt="" />
                                    
                                </div>
                                <div className='DescTitle'>
                                    <h1>Landing Page</h1>
                                    <span>
                                        Aterrizamos tus clientes a tu sitio web, si no lo tienes nosotros te lo creamos. <br /><br />
                                        
                                        ¡Habilitamos las compras a tus clientes desde el sitio web!
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <img src="https://theme-land.com/sapp/demo/assets/img/icon/featured-img/layers.png" alt="" />
                                </div>
                                <div className='DescTitle'>
                                    <h1>¡Tu marca!</h1>
                                    <span>
                                        No solo es vender más, sino crear más confianza y credibilidad en tu mercado. <br /><br /> 

                                        Nosotros nos encargamos de que explotes todo el potencial
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homeSellsIncludeSpecifity'>
                <div className='containerInclude'>
                    <div className='leftContainer'>
                        <div className='titleAndDesc'>
                            <h1>Desarrollamos y potenciamos tu Ecommerce</h1>
                        </div>

                        <div className='containerListOptions'>
                            <div className='option'>
                                <div className='icon'>
                                    <MdOutlineAddShoppingCart className='iconA' /> 
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        Creamos y adaptamos tu propia tienda Ecommerce a tu medida. Con ventas en linea, y todos los certificados para brindarle mayor confianza a tus clientes.
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <TbWorldWww className='iconA'/>
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        Dominio incluido, conexión a redes sociales.
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <MdOutlineAutoAwesomeMosaic className='iconA' />
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        Autoadministrable, Añade y elimina productos cuando lo necesites. ¡Crea promociones o campañas cuando lo desees!
                                    </span>
                                </div>
                            </div>

                            

                            <div className='btn'>
                                <button onClick={() => navigation('/contact')}>
                                    <span>
                                        ¡Despeguemos!
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='wallpaperRight'>
                        <img src="https://theme-land.com/sapp/demo/assets/img/services/thumb-2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='homeSellsIncludeSpecifity'>
                <div className='containerInclude'>
                    <div className='wallpaperRight'>
                        <img src="https://theme-land.com/sapp/demo/assets/img/services/thumb-2.png" alt="" />
                    </div>
                    <div className='leftContainer'>
                        <div className='titleAndDesc'>
                            <h1>¿Como convertimos las visitas en ventas?</h1>
                        </div>

                        <div className='containerListOptions'>
                            <div className='option'>
                                <div className='icon'>
                                    <MdOutlineAdsClick className='iconA' />
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        Llamados a la acción todo el tiempo.
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <MdOutlineAllInbox className="iconA" />
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        Embudos altamente atractivos.
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <MdOutlineFilterCenterFocus className='iconA' />
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        Captemos la atención de tus clientes potenciales a través de los Ads más populares.
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <SiOpenai className='iconA' />
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        Automatizamos la conversación con IA.
                                    </span>
                                </div>
                            </div>

                            <div className='option'>
                                <div className='icon'>
                                    <MdOutlineLibraryBooks className='iconA' />
                                </div>
                                <div className='txtSpan'>
                                    <span>
                                        No solo trabajamos contigo, ¡Te abrimos espacio a nuestras capacitaciones para que tu y los miembros de tu empresa también aprendan!
                                    </span>
                                </div>
                            </div>

                            <div className='btn'>
                                <button onClick={() => navigation('/contact')}>
                                    <span>
                                        ¡Despeguemos!
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='homeSellOpinions'>
                <div className='containersOpinions'>

                    <div className='vigeButton'>
                    <button onClick={() => nextMessage()}>
                            <span>Leftr</span>
                        </button>
                    </div>
                    <div className='comments'>

                        {
                            opiniones.map((opin, i) => {
                                if(opinion == i){
                                    return (
                                        <div className='containerCommentas'>
                                            <div className='img'>
                                                <img src={opin.img} alt="" />
                                            </div>
                                            <div className='titleNameStarsDesc'>
                                                <h3>{opin.name}</h3>
                                                <span>{opin.ubication}</span>
    
                                                <div className='stars'>
                                                    <img src="https://rainbowthemes.net/splash/react/histudy/assets/images/splash/icons/rating.png" alt="" />
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <span>
                                                    {opin.message}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                        
                    </div>
                    <div className='vigeButton'>
                        <button onClick={() => nextMessage(true)}>
                            <span>Right</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='subscribeFree'>
                <div className='containerForms'>
                    <div className='descInfo'>
                        <h3>Si los resultados no son los esperados</h3>
                        <span>¡Te devolvemos todo tu dinero!</span>
                    </div>
                    <div className='forms'>
                        {
                            form ?
                            <span className='thanks'>¡Gracias por tu subscripción!</span>
                            :

                            <div className='containerForms'>
                                <input type="text" placeholder='Escribe tu correo'
                                defaultValue={email} onChange={(e) => {
                                    enterEmail(e.target.value)
                                }} onKeyPress={(e) => {
                                    if(e.code == 'Enter'){
                                        sendSubscription();
                                    }
                                }} disabled={loading ? true : false} />
                                {
                                    
                                    loading ? null : 
                                    <button onClick={() => sendSubscription()}>¡Comenzar!</button>
                                }
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}