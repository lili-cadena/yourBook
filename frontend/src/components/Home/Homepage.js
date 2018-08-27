import React from 'react';
import Form from './Form'
import YourBooks from './YourBooks'
import {logout} from '../../services/Auth';
import {withRouter} from 'react-router-dom';


class Homepage extends React.Component{
    handleLogout=()=>{
        logout()
        .then(()=>{
            this.props.history.push("/");
        })
    };

    render(){
        return(
            <div>
                <div name='logout' onClick={this.handleLogout}>Logout</div>
                <Form/>
                <YourBooks/>
            </div>
        )
    }
}

export default withRouter(Homepage);