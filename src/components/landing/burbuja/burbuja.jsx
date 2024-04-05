import React from 'react';
import { FaPhoenixFramework, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
import { SiMessenger } from 'react-icons/si';
import { TbWorldWww } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function Burbuja(){
    const navigation = useNavigate();

    let mensaje =  `Hola, ¡Estoy interesado/a!`;

    return (
        <div className='burbuja'>
            
            <div className='burb'>
                <div className='hiddeNav' id="comunicate">
                    <nav>
                        <ul>
                            <li onClick={() => {
                                    window.open('https://api.whatsapp.com/send?phone=+573212207563&text='+mensaje+'')
                            }}>
                                <button className='WhatsApp'>
                                    <FaWhatsapp className='icon' />
                                </button> 
                                <span className='WhatsApp'>WhatsApp</span>

                            </li>
                            <li>
                                <button className='Messenger'>
                                    <SiMessenger className='icon' />
                                </button>
                                <span className='Messenger'>Messenger</span>

                            </li>
                            <li onClick={() => navigation('/contact')}>
                                <button className='Web'>
                                    <TbWorldWww className='icon' />
                                </button>
                                <span className='Web'>Contactar</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='btn'>
                    <button onClick={() => {
                        document.querySelector('#comunicate').classList.toggle('hiddeNavActive')
                    }}>
                        <FaPhoneFlip className='icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}