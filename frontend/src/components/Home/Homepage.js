import React from 'react';
import Form from './Form'
import YourBooks from './YourBooks'


class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Form/>
                <YourBooks/>
            </div>
        )
    }
}

export default Homepage;