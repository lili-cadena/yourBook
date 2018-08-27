import React from 'react';
import {signup} from '../../services/Auth';
import {withRouter, Redirect} from 'react-router-dom';

class Signup extends React.Component{

    state= {
        user: {},
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        signup(this.state.user)
    };

    handleRedirect=(e)=>{
        e.preventDefault();
        signup(this.state.user)
        .then(()=>{
            this.props.history.push('/home');
            window.location.reload();
        });
    };

    handleChange=(e)=>{
        const {user} = this.state;
        const field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    };


    render(){
        if(this.state.redirect===true){
            return <Redirect to ='/home'/>
        }
        return (
            <form onSubmit={this.handleSubmit}>

                <label>Name</label>
                <input type='text' name='username' placeholder='User name' onChange={this.handleChange}/>

                <label>Email</label>
                <input type='email' name='email' placeholder='Email' onChange={this.handleChange}/>

                <label>Password</label>
                <input type='password' name='password' placeholder='xxxxx' onChange={this.handleChange}/>

                <button className='signup' htmlType='submit' onClick={this.handleRedirect}>Signup</button>
                
            </form>
        );
    }
}

export default withRouter(Signup);