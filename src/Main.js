import React from 'react';
import HornedBeasts from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import './Main.css';



class Main extends React.Component{
    render(){
        
        let beastArr = this.props.data.map((beast, index) => (
                <HornedBeasts 
                    key={index}
                    title={beast.title}
                    img={beast.image_url}
                    description={beast.description}
                    keyword={beast.keyword}
                    horns={beast.horns}
                />
            ))
        return(
            <main>
                <Container>
                {beastArr}
                </Container>
            </main>
        )
    }
    
}

export default Main;