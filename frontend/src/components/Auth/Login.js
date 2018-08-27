import React from 'react';
import {login} from '../../services/Auth';
import {withRouter} from 'react-router-dom';

class Login extends React.Component{

    state= {
        user: {}
    };

    handleSubmit = (e) => {
        e.preventDefault();

        login(this.state.user)
        .then(user=>{
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({user:{}});
            this.props.history.push('/home');
            window.location.reload();
            return;
        })
    };

    handleChange=(e)=>{
        const {user} = this.state;
        const field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    };


    render(){

        return (
            <form onSubmit={this.handleSubmit}>

                <label>Email</label>
                <input type='email' name='email' placeholder='Email' onChange={this.handleChange}/>

                <label>Password</label>
                <input type='password' name='password' placeholder='xxxxx' onChange={this.handleChange}/>

                <button className='login' htmlType='submit' onClick={this.handleSubmit}>Login</button>

            </form>
        );
    }
}

export default withRouter(Login);