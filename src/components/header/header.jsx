import React, { useContext } from 'react';
import S from './header.module.scss';
import { EnvContext } from '../../pages/index';

export default function Header(){

    const { isBigScreen } = useContext(EnvContext);

    const links = [
        {
            display: '<Guy/>',
            link: '#hero'
        },
        {
            link: '#about'
        },
        {
            link: 'pdf link'
        },
        {
            link: '#projects'
        }
    ]

    const navClassName = `${S.container} ${isBigScreen ? S.onBigScreen : ''}`;

    return (
        <nav className={navClassName}>
            {
                links.map((link) => (
                    <a key={link.link} href={link.link}>{link.display ? link.display : link.link.replace('#', '')}</a>
                ))
            }
        </nav>
    );
}