import React, { useContext } from 'react';
import S from './header.module.scss';
import { EnvContext } from '../../pages/index';
import views from '../../views';

export default function Header(){

    const { isBigScreen } = useContext(EnvContext);

    const navClassName = `${S.container} ${isBigScreen ? S.onBigScreen : ''}`;

    return (
        <nav className={navClassName}>
            {
                Object.keys(views).map((tab, idx) => (
                    <a key={tab} href={`#${idx}`}>{tab.replace('Hero', '<Guy/>')}</a>
                ))
            }
        </nav>
    );
}