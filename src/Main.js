import React from 'react';
import HornedBeasts from './HornedBeast.js';

class Main extends React.Component{
    render(){

        let beastArr = this.props.data.map((beast, index) => (
            <HornedBeasts 
                key={index}
                title={beast.title}
                img={beast.image_url}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}/>
        ));
        return(
            <main>
                {beastArr}
            </main>
        )
    }
}

export default Main;