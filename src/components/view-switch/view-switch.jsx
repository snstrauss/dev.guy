import React, { useEffect, useState, useRef } from 'react';
import S from './view-switch.module.scss';
import views from '../../views';
import Header from '../header/header';

import anime from 'animejs';
import { removeHash, getCurrentTab } from '../../services/utils';

const SCROLLER_SELECTOR = '#scroller';
const justViews = Object.values(views);

const tabRelativeWidth = 100 / justViews.length;

function calculateTranslateX(multi){
    return -1 * tabRelativeWidth * multi + '%';
}

export default function ViewSwitch(){

    const [initialScroll] = useState(getCurrentTab());
    const firstRun = useRef(true);

    useEffect(() => {
        const leftMultiplier = getCurrentTab();

        if(!firstRun.current){
            anime({
                targets: '#scroller',
                translateX: calculateTranslateX(leftMultiplier),
                easing: 'spring'
            })
        } else {
            firstRun.current = false;
            anime.set(SCROLLER_SELECTOR, {
                translateX: calculateTranslateX(initialScroll)
            });
        }

    });

    return (
        <div className={S.container}>
            <div className={S.header}>
                <Header/>
            </div>
            <div className={S.views}>
                <div className={S.scroller} id={removeHash(SCROLLER_SELECTOR)} style={{'--tabs-count': justViews.length}}>
                    {
                        justViews.map((View, idx) => (
                            <View key={idx}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}