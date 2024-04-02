import React from 'react';

export default function Article(){
    return (
        <div className='article'>
            <div className="containerArticle">
                <div className='titlePrincipal'>
                    <div className='date'>
                        <span>Marzo 3 del 2024</span>
                    </div>
                    <div className='title'>
                        <h1>Titulo del articulo en letra grande</h1>
                    </div>
                </div>

                <div className='descArticle'>
                    <div className='text'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut repellat, sit, ut quia illo cumque natus sequi perferendis nihil rerum doloribus eius molestias quasi commodi libero. Natus, quam reiciendis.</span>
                        <br /><br />
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias velit praesentium culpa labore, corporis nemo quas delectus officia nam dolorem repellat! Nobis, optio? Dolores laboriosam quae nisi odio beatae.
                        </span>

                        <br /><br />
                        <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet porro aperiam iure alias distinctio! Voluptatum, iusto odio, impedit laudantium, cumque obcaecati eum consequuntur asperiores illo debitis officiis aliquam placeat odit?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo fuga eveniet obcaecati recusandae itaque rerum sunt quasi et quam, beatae eum cumque officiis temporibus? Doloremque voluptatem asperiores unde debitis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a repellat cum nisi, neque ullam tenetur est temporibus sit dignissimos quis! Earum obcaecati atque architecto, eveniet veniam consequuntur impedit vel!
                        </span>

                        <div className='cita'>
                            <div className='textCita'>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, voluptate. Fuga, tenetur. Dolorum, suscipit. Culpa exercitationem deleniti adipisci et, maiores sed cum, voluptatem eveniet sit, fugit labore iusto pariatur impedit?
                                </span>
                            </div>
                            <div className='author'>
                                <span>Kevin Andrés - KABO</span>
                            </div>
                        </div>
                        
                        <h3 className='subtitle'>Subtitulo aquí en negrilla y con espacio</h3>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe, incidunt nostrum natus expedita corrupti, labore minus ex quod nemo dolorum voluptatum architecto id eveniet qui asperiores velit. Nostrum, porro?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quo amet sit ipsa! Harum, voluptatem? Dignissimos rerum iure obcaecati consequuntur mollitia unde explicabo voluptatem, modi eligendi sunt adipisci omnis officiis.
                        </span>
                    </div>
                </div>

                <div className='tags'>
                    <div className='listTags'>
                        <button>
                            <span>Recomendaciones</span>
                        </button>
                        <button>
                            <span>Inspiración</span>
                        </button>
                        <button>
                            <span>Liderazgo</span>
                        </button>
                        <button>
                            <span>Libros</span>
                        </button>
                    </div>
                </div>
                <div className='dateBottom'>
                    <span>KABO - Marzo 4 2024. </span>
                </div>
            </div>
        </div>
    )
}