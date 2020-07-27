import React from 'react';
import S from './view.module.scss';

export default function View({ children }){

    return (
        <div className={S.container}>
            {children}
        </div>
    )
}