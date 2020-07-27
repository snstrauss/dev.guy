import React, { useContext } from 'react';
import S from './header.module.scss';
import { EnvContext } from '../../pages/index';

export default function Header({ viewNames }){

    const { isBigScreen } = useContext(EnvContext);

    const navClassName = `${S.container} ${isBigScreen ? S.onBigScreen : ''}`;

    return (
        <nav className={navClassName}>
            {
                viewNames.map((tab, idx) => (
                    <a key={tab} href={`#${idx}`}>{tab.replace('Hero', '<Guy/>')}</a>
                ))
            }
        </nav>
    );
}