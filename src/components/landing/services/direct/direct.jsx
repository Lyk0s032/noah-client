import React from 'react';
import AutomatizacionServices from './automatizacion/automatizacion';
import { Route, Routes } from 'react-router-dom';
import Consulting from './consulting/consulting';
import Comunication from './comunication/comunication';
import Sells from './sells/sells';

export default function Direct(){
    return (
        <div className='direct'>
            <Routes>
                <Route path="/automation/*" element={<AutomatizacionServices />} />
                <Route path="/consulting/*" element={<Consulting />} />
                <Route path="/comunication/*" element={<Comunication />} />
                <Route path="/sells/*" element={<Sells />} />
            </Routes>
        </div>
    )
}