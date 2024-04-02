import React from 'react';

export default function Contact(){
    return (
        <div className='contact'>
            <div className='contactHome'>
                <div className='container'>
                    <div className='descContact'>
                        <div className='desc'>

                            <div className='wallpaper'>
                                <img src="https://colorlib.com/etc/cf/ContactFrom_v12/images/img-01.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='formContact'>

                        <div className='divForm'>
                            <div className="header">
                                <h3>¡Despeguemos!</h3>
                                <span>Subete a la nave de la digitalización e innovación. ¡Nosotros te llevamos!</span>
                            </div>
                            <div className='form'>
                                <div className='containerForm'>
                                    <div className='inputCamp'>
                                        <input type="text" placeholder='Escribe tu nombre' />
                                    </div>
                                    <div className='inputCamp'>
                                        <input type="text" placeholder='Número de teléfono' />
                                    </div>
                                    <div className='inputCamp'>
                                        <button>
                                            <span>
                                                ¡Despegar!
                                            </span>
                                        </button>
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