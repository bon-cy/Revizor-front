import React from 'react';
import Cards from '../../components/Cards/Cards';
import Picture from '../../components/Picture/Picture';
import Diner from '../Diner/Diner';

const MainPage = () => {
    
    return (
        <div>
            <Picture/>
            <Diner/>
            <Cards />
        </div>
    );
};

export default MainPage;