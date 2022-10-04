import React from 'react';
import Cards from '../../components/Cards/Cards';
import Picture from '../../components/Picture/Picture';
import Map from '../Map/Map';
import Info from '../../components/Info/Info';


const MainPage = () => {
    
    return (
        <div>
            <Picture/>
            <Info/>
            <Map/>
            <Cards />
            
        </div>
    );
};

export default MainPage;