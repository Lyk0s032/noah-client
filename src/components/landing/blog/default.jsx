import React from 'react';
import { FaGoogle, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export default function DefaultBlog(){
    const navigation = useNavigate();
    return (
        <div className='default'>
            <div className='homeDefault'>
                <div className='container'>
                    <div className='bigName'>
                        <h1><span>N</span>OA<span>H</span></h1>
                    </div>
                    <div className='small'>
                        <div className='leftText'>
                            <h3>
                                No existe un único camino para alcanzar el éxito, Existen infinitas formas de alcanzarlo. ¡Encuentra la tuya!
                            </h3>
                            <span>
                                El objetivo es nutrirnos de los mejores recursos para decidir que camino seguir, y caminarlo con las mejores botas.
                            </span>
                        </div>
                        <div className='rightText'>
                            <div className='img'>
                                <img src="" alt="" />
                            </div>
                            <div className='textMisionBlog'>
                                <strong>Noah Contenido</strong><br /><br />
                                <span>Nos apasiona contruir, compartir y sobre  todo aprender día a día de los mejores. <br /><br /> </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='defaultBlogSection'>
                <div className='containerSections'>
                    <div className='leftSection'>
                        <div className='containerLeft'>
                            <div className='navSectionsSearch'>
                                <div className='noah'>
                                    <strong>N O A H</strong>
                                </div>
                                <div className='navigationBlog'>
                                    <nav>
                                        <ul>
                                            <li className='active'>
                                                <span>Todo</span>
                                            </li>
                                            <li>
                                                <span>Empresarial</span>
                                            </li>
                                            <li>
                                                <span>Superación</span>
                                            </li>
                                            <li>
                                                <span>Espiritualidad</span>
                                            </li>
                                            <li>
                                                <span>Liderazgo</span>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='containerNews'>
                                <div className='containerN'>
                                    <div className='divideNews'>
                                        <div className='leftBig'>
                                            <div className='new' onClick={() => navigation('a/everithing') }>
                                                <div className='wallpaper'>
                                                    <img src="https://preview.colorlib.com/theme/world/img/blog-img/b1.jpg" alt="" />
                                                </div>
                                                <div className='descNew'>
                                                    <h3>
                                                        5 cosas que debes evitar para alcanzar el éxito
                                                    </h3>

                                                    <span className='note'>
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quos explicabo, sequi deserunt beatae odio aliquid provident ad commodi ratione at ipsam quia, maxime perspiciatis saepe nemo molestiae, id deleniti.
                                                    </span><br /><br />

                                                    <span className='time'>
                                                        Jueves 10 de Marzo del 2024 a las 8:39 am
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='rightSmallNew'>
                                            <div className='news'>
                                                    
                                                <div className='new'>
                                                    <div className='containerNew'>
                                                        <div className='img'>
                                                            <img src="https://preview.colorlib.com/theme/world/img/blog-img/b1.jpg" alt="" />
                                                        </div>
                                                        <div className='desc'>
                                                            <h3>
                                                                Las 5 principales fuentes de ingresos del 2024
                                                            </h3>
                                                            <span className='atTime'>
                                                                <span>Miami. Marzo 4 del 2024</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='new'>
                                                    <div className='containerNew'>
                                                        <div className='img'>
                                                            <img src="https://preview.colorlib.com/theme/world/img/blog-img/b1.jpg" alt="" />
                                                        </div>
                                                        <div className='desc'>
                                                            <h3>
                                                                Las 5 principales fuentes de ingresos del 2024
                                                            </h3>
                                                            <span className='atTime'>
                                                                <span>Miami. Marzo 4 del 2024</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='new'>
                                                    <div className='containerNew'>
                                                        <div className='img'>
                                                            <img src="https://preview.colorlib.com/theme/world/img/blog-img/b1.jpg" alt="" />
                                                        </div>
                                                        <div className='desc'>
                                                            <h3>
                                                                Las 5 principales fuentes de ingresos del 2024
                                                            </h3>
                                                            <span className='atTime'>
                                                                <span>Miami. Marzo 4 del 2024</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rightContainerBlog'>
                        <div className='containerSmallNews'>
                            <div className='topDiv'>
                                <div className='title'>
                                    <h3>
                                        Editando el mundo
                                    </h3>
                                </div>
                                <div className='desc'>
                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, in culpa. Quidem enim ducimus unde labore delectus culpa blanditiis soluta provident mollitia iure nobis ex, praesentium est ipsum, perferendis odio.</span>
                                </div>
                            </div>
                            <div className='recentsNews'>
                                <div className='title'>
                                    <h3>Recientes</h3>
                                </div>

                                <div className='containerSmallNewsRecents'>
                                    <div className='newRecent'>
                                        <div className='container'>
                                            <div className='img'>
                                                <img src="https://preview.colorlib.com/theme/world/img/blog-img/b1.jpg" alt="" />
                                            </div>
                                            <div className='newDesc'>
                                                <strong>
                                                    ¿Cómo superar las preocupaciones?
                                                </strong><br />
                                                <span>
                                                    Domingo 24 de Marzo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='ourSocialNetwork'>
                                    <div className='containerSocial'>
                                        <div className='title'>
                                            <h3>Nuestras redes</h3>
                                        </div>
                                        <div className='networks'>
                                            <div className='horizontalNetwork'>
                                                <button>
                                                    <FaInstagram className='icon' />
                                                </button>
                                                <button>
                                                    <FaXTwitter className='icon' />
                                                </button>
                                                <button>
                                                    <FaGoogle className='icon' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}