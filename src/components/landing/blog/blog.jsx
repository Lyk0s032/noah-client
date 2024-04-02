import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultBlog from './default';
import Article from './article';

export default function Blog(){
    return (
        <div className='blog'>
            <Routes>
                <Route path="/*" element={<DefaultBlog />} />
                <Route path="/a/:articulo/*" element={<Article />} />

            </Routes>
        </div>
    )
}