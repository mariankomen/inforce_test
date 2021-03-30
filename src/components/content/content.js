import React, {useState} from 'react';

import styles from '../../assets/styles/content.module.scss'
import ProductItem from "./product-item/product-item";
import EditComponent from "./edit-component/editComponent";



const Content = (props) => {

    const [visible, setVisible] = useState(false)

    let RenderItem = props.state.map(item => <ProductItem name={item.name}
                                                          imageUrl={item.imageUrl}
                                                          desc={item.desc}
                                                          weight={item.weight}
                                                          width={item.size.width}
                                                          height={item.size.height}
                                                          visible={visible}
                                                          setVisible={setVisible}
    />)

    return (
        <div className={styles.content_main}>
            <div className={styles.content_main__block_1}>
                {RenderItem}
            </div>
            <div className={styles.content_main__block_2}>

                    {visible && <EditComponent/>}

            </div>
        </div>
    );
};

export default Content;