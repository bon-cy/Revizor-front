import React from 'react';
import Cards from '../../components/Cards/Cards';
import Picture from '../../components/Picture/Picture';
import Map from '../Map/Map';
import Info from '../../components/Info/Info';
import MapInteractive from '../../components/MapInteractive/MapInteractive';


const MainPage = () => {
    
    return (
        <div>
            <Picture/>
            <Info/>
            
            <MapInteractive />
            <Cards />
            
        </div>
    );
};

export default MainPage;