import React from "react";
import Logo from '../../../assets/logo.png';
import { IoReorderThree } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export default function Nav(){
    const navigation = useNavigate()

    const openMain = () => {
        let a = document.querySelector("#mainMobile").classList.toggle('navigation-optionsActive')
    }
    return (
        <div className="navNoah">
            <div className="navigation-container">
                <div className="left-nav">
                    <img src={Logo} alt="" onClick={() => {
                        navigation('/s/')
                    }} />
                </div>
                <div className="navigation-options" id="mainMobile">
                    <nav>
                        <ul>
                            <li  className="li">
                                <span>
                                    Servicios
                                </span>

                                <div className="subBox Services">
                                    <div className="navigation">
                                        <div className="header-nav">
                                            <div className="textAndDesc">
                                                <h3>Nuestros servicios</h3>
                                                <span>Explora nuestra variedad de servicios según tu necesidad.</span>
                                            </div>
                                        </div>

                                        <div className="subOptions">
                                            <nav className="subOptionsNav">
                                                <div className="titleSubOptions">
                                                    <h3>Servicios Noah</h3>
                                                </div>
                                                <div className="optionsList">
                                                    <ul>
                                                        <li onClick={() => {
                                                            navigation('/s/direct/sells');
                                                            openMain();
                                                        }}>
                                                            <span>Impulzamiento de ventas</span>
                                                        </li>
                                                        <li onClick={() => {
                                                            navigation('/s/direct/comunication');
                                                            openMain();
                                                        }}>
                                                            <span>Comunicaciones</span> 
                                                        </li>
                                                        <li onClick={() => {
                                                            navigation('/s/direct/automation');
                                                            openMain();
                                                        }}>
                                                            <span>Automatización</span>
                                                        </li>
                                                        <li onClick={() => {
                                                            navigation('/s/direct/consulting');
                                                            openMain();
                                                        }}>
                                                            <span>Consultoría</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>

                                            <nav className="subOptionsNav">
                                                <div className="titleSubOptions">
                                                    <h3>Servicios especificos</h3>
                                                </div>
                                                <div className="optionsList">
                                                    <ul>
                                                        <li onClick={() => {
                                                            navigation('/s/specific/web');
                                                            openMain();
                                                        }}>
                                                            <span>Desarrollo Web</span>
                                                        </li>
                                                        <li onClick={() => {
                                                             navigation('/s/specific/mobile');
                                                             openMain();
                                                        }}>
                                                            <span>Desarrollo Mobile</span> 
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
 
                                </div>
                            </li>

  

                            <li className="li" onClick={() => {
                                navigation('/us');
                                openMain();
                            }}>
                                <span>
                                    Nosotros
                                </span>

                  
                            </li>

                            <li className="li"  onClick={() => {
                                navigation('/blog');
                                openMain();
                            }}>
                                <span>
                                    Blog
                                </span>


                            </li>

                            <li className="li GoAction" >
                                <button onClick={() => {
                                    navigation('/contact');
                                    openMain();
                                }}>
                                    <span>Comunicarme</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="responsiveBtn">
                    <button onClick={() => openMain()}>
                        <IoReorderThree className="icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}