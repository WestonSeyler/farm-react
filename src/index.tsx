import React from 'react';
import { createRoot } from 'react-dom/client';
import { DatePicker } from 'antd';
import App from './app'


const container = document.querySelector('#root');
const root = createRoot(container);




root.render(
    <div>
        <span>A React Page compiled by Farm</span>
        <div style={{marginBottom: '20px'}}>
        antd DatePicker: <DatePicker />
        </div>
        <App/>
    </div>
    
);