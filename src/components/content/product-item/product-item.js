import React from 'react';

import styles from '../../../assets/styles/productItem.module.scss'

const ProductItem = (props) => {
    return (
        <div className={styles.product}>
            <div className={styles.product__content}>
                <div className={styles.product__content__without_sizes}>
                    <span className={styles.product__name}>{props.name} <button>Edit</button></span>
                    <div className={styles.product__image}>
                        <img
                            src={`${props.imageUrl}`}/>
                    </div>
                    <p className={styles.product__description}>
                        {props.desc}
                    </p>
                </div>
                <div className={styles.product__propertys}>
                    <div className={styles.product__propertys__size}>Size: {props.width} x {props.height}</div>
                    <div className={styles.product__propertys__weight}>Weight: {props.weight}</div>
                </div>
            </div>

            <div className={styles.product__footer}>

                <span className={styles.product__footer__item}>
                    <p>Remainded: 14</p>
                </span>
                <span className={styles.product__footer__item}>
                    <button>More...</button>
                </span>
            </div>
        </div>
    );
};

export default ProductItem;