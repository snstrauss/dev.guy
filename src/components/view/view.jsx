import React from 'react';
import S from './view.module.scss';

export default function View({ children, tabNumber }){

    return (
        <div className={S.container} data-tab={tabNumber}>
            {children}
        </div>
    )
}