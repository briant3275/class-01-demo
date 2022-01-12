import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
            <article>
                <h2>Rhino</h2>
                <img
                src="https://images.unsplash.com/photo-1605477899141-ac050a727db1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJoaW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Rhino"
                title="Rhino"
                />
                <p>This is a description of a Rhino</p>

                <h2>Chameleon</h2>
                <img
                src="https://images.unsplash.com/photo-1502641923341-7d3e5c05bd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9ybmVkJTIwbGl6YXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Chameleon"
                title="Chameleon"
                />
                <p>This is a description of a Chameleon</p>
            </article>
        )
    }
}

export default HornedBeast;