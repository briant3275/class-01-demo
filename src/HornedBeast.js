import React from 'react';

class HornedBeast extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            votes: 0
        }
    }

    handleVote = () => {
        this.setState({
            votes: this.state.votes + 1
        });
    }
    
    render(){
        console.log(this.state.votes);
        return(
            <article>
                <h2 onClick={this.handleVote}>{this.props.title}</h2>
                <p>🤘: {this.state.votes}</p>
                <img
                src={this.props.image_url}
                alt={this.props.title}
                title={this.props.title}
                />
                <p>{this.props.description}</p>
            </article>
        );
    }
}

export default HornedBeast;