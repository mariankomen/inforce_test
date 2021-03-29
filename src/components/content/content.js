import React from 'react';

import styles from '../../assets/styles/content.module.scss'
import ProductItem from "./product-item/product-item";



const Content = (props) => {

    let RenderItem = props.state.map(item => <ProductItem name={item.name}
                                                          imageUrl={item.imageUrl}
                                                          desc={item.desc}
                                                          weight={item.weight}
                                                          width={item.size.width}
                                                          height={item.size.height}
    />)

    return (
        <div className={styles.content_main}>
            <div className={styles.content_main__block_1}>
                {RenderItem}
            </div>
            <div className={styles.content_main__block_2}></div>
        </div>
    );
};

export default Content;