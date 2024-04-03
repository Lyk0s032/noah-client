import React, { useState } from 'react';
import * as actions from '../../../actions';

export default function Contact(){

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
                const send =  await actions.IWannaComunicate(name, number, 'comunication')
                .then(res => {
                    setLoading(false);
                    setName(null);
                    setNumber(null);
                    document.querySelector('#name').value = '';
                    document.querySelector('#number').value = '';

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
                    setName(null);
                    setNumber(null);
                    return false;
                })
                
            }
        }
    }
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
                                <span>{name}Subete a la nave de la digitalización e innovación. ¡Nosotros te llevamos!</span>
                            </div>
                            <div className='form'>
                                <div className='containerForm'>
                                    <div className='inputCamp'>
                                        <input type="text" id="name" placeholder='Escribe tu nombre' 
                                        defaultValue={name } 
                                        onChange={(e) => changeValor('name', e.target.value)} />
                                    </div>
                                    <div className='inputCamp'>
                                        <input type="text" id="number" placeholder='Número de teléfono'
                                        defaultValue={number} onChange={(e) => changeValor('number', e.target.value)}
                                        
                                        onKeyPress={(e) => {
                                            if(e.code == 'Enter'){
                                                sendComunication();
                                            }
                                        }}/>
                                    </div>
                                    <div className='inputCamp'>
                                        {
                                            loading ?
                                            <button disabled={true}>
                                                <span>
                                                    Enviando...
                                                </span>
                                            </button>
                                            :

                                            form ?
                                            <span>
                                                ¡Gracias! Pronto nos comunicaremos contigo
                                            </span>
                                            :
                                            <button onClick={() => sendComunication()}>
                                                <span>
                                                    ¡Despegar!
                                                </span>
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
    )
}