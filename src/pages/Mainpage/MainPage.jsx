import React from 'react';
import Cards from '../../components/Cards/Cards';
import Picture from '../../components/Picture/Picture';
import Map from '../Map/Map';


const MainPage = () => {
    
    return (
        <div>
            <Picture/>
            <Map/>
            <Cards />
            
        </div>
    );
};

export default MainPage;