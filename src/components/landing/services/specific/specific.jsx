import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Web from './web/web';
import Mobile from './mobile/mobile';

export default function Specific(){
    return (
        <div className='specific'>
            <Routes>
                <Route path="/*" element={<Web />} />
                <Route path="/mobile/*" element={<Mobile />} />

            </Routes>
        </div>
    )
}