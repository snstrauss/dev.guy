import React, { useEffect, useState, useRef } from 'react';
import S from './view-switch.module.scss';
import Header from '../header/header';
import anime from 'animejs';
import { removeHash, getCurrentTab } from '../../services/utils';
import { useMemo } from 'react';

const SCROLLER_SELECTOR = '#scroller';

function calculateTranslateX(multi, tabRelativeWidth){
    return -1 * tabRelativeWidth * multi + '%';
}

export default function ViewSwitch({ views }){

    const [initialScroll] = useState(getCurrentTab());
    const firstRun = useRef(true);

    const [viewKeys, viewContents] = useMemo(() => [Object.keys(views), Object.values(views)], [views])
    const markersArr = useMemo(() => {
        return Array(viewKeys.length).fill(0);
    }, [viewKeys])

    const tabRelativeWidth = 100 / viewContents.length;

    let currentTab = getCurrentTab();
    useEffect(() => {

        if(!firstRun.current){
            anime({
                targets: '#scroller',
                translateX: calculateTranslateX(currentTab, tabRelativeWidth),
                easing: 'spring'
            })
        } else {
            firstRun.current = false;
            anime.set(SCROLLER_SELECTOR, {
                translateX: calculateTranslateX(initialScroll, tabRelativeWidth)
            });
        }

    });

    return (
        <div className={S.container}>
            <div className={S.header}>
                <Header viewNames={viewKeys}/>
            </div>
            <div className={S.views}>
                <div className={S.scroller} id={removeHash(SCROLLER_SELECTOR)} style={{'--tabs-count': viewContents.length}}>
                    {
                        viewContents.map((Tab, idx) => (
                            <Tab key={idx}/>
                        ))
                    }
                </div>
            </div>
            <div className={S.markers}>
                {
                    markersArr.map((_, idx) => (
                        <div key={idx} className={`${S.marker} ${idx === currentTab ? S.current : ''}`}></div>
                    ))
                }
            </div>
        </div>
    )
}