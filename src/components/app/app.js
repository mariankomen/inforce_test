import React from 'react';

import Header from "../header/header";

import styles from '../../assets/styles/app.module.scss'
import Content from "../content/content";

const App = () => {

    let state = [
        {
            id:1,
            imageUrl: 'https://i.pinimg.com/originals/5d/2f/94/5d2f9440f4c7472cc2a7fb5a2e9d011d.jpg',
            name: 'Apple',
            desc: 'Lorem impsutLorem impsutLorem impsutLorem impsutLorem impsutLorem impsut',
            count: 4,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: []
        },
        {
            id:1,
            imageUrl: 'https://i.pinimg.com/originals/5d/2f/94/5d2f9440f4c7472cc2a7fb5a2e9d011d.jpg',
            name: 'Apple',
            desc: 'Lorem impsutLorem impsutLorem impsutLorem impsutLorem impsutLorem impsut',
            count: 4,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: []
        },{
            id:1,
            imageUrl: 'https://i.pinimg.com/originals/5d/2f/94/5d2f9440f4c7472cc2a7fb5a2e9d011d.jpg',
            name: 'Apple',
            desc: 'Lorem impsutLorem impsutLorem impsutLorem impsutLorem impsutLorem impsut',
            count: 4,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: []
        },{
            id:1,
            imageUrl: 'https://i.pinimg.com/originals/5d/2f/94/5d2f9440f4c7472cc2a7fb5a2e9d011d.jpg',
            name: 'Apple',
            desc: 'Lorem impsutLorem impsutLorem impsutLorem impsutLorem impsutLorem impsut',
            count: 4,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: []
        },{
            id:1,
            imageUrl: 'https://i.pinimg.com/originals/5d/2f/94/5d2f9440f4c7472cc2a7fb5a2e9d011d.jpg',
            name: 'Apple',
            desc: 'Lorem impsutLorem impsutLorem impsutLorem impsutLorem impsutLorem impsut',
            count: 4,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: []
        },
    ]



    return (
        <div className={styles.general_block}>
            <Header/>
            <Content state={state}/>
        </div>
    );
};

export default App;