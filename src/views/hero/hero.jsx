import React from 'react';
import S from './hero.module.scss';
import View from '../../components/view/view';

export default function Hero(){

    return (
        <View>
            <div className={S.container}>
                <p>
                    <span className={S.name}>Guy Zahavi</span>
                    <span className={S.title}>Front-end Developer</span>
                </p>
            </div>
        </View>
    )
}