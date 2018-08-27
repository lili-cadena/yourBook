import React from 'react';

class Form extends React.Component{
    render(){
        return (
            <form>
                <label>Search a book to add to your library:</label>
                <input type='text' name='title' placeholder='Title book' onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Form;