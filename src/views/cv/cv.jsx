import React, { useState } from 'react';
import S from './cv.module.scss';
import View from '../../components/view/view';

export default function CV(){

    const [isLoading, setIsLoading] = useState(true);

    // debugger;

    function loaded(){

        // debugger;
        setIsLoading(false);
    }

    const iframeClassname = isLoading ? S.hidden : '';

    return (
        <View>
            <div className={S.container}>
                {/* {
                    (isLoading || true) &&
                    <h2 className={S.spinner}>WAITT</h2>
                } */}
                {/* <iframe src="https://drive.google.com/file/d/1eNTXe5AJ6dOJi5ksnmt8yIbVeIJZaDFl/preview"
                    className={iframeClassname} onLoad={loaded}></iframe> */}
                <object data="https://drive.google.com/uc?export=download&id=1eNTXe5AJ6dOJi5ksnmt8yIbVeIJZaDFl" type="application/pdf" width="100%" height="100%">
                    <p>Alternative text - include a link <a href="myfile.pdf">to the PDF!</a></p>
                </object>
            </div>
        </View>
    )
}