import React, { Component } from 'react'
import 'bulma/css/bulma.css';


class AddForm extends Component {


    render() {
        const { onAdd } = this.props
        return (
            <form onSubmit={onAdd} style={{ width: '30%' }} autoComplete="off">
                <input className="input is-primary" type="text" placeholder="Name" name='name' />
                <input className="input is-primary" type="number" placeholder="Calories" name='calories' />
                <input className="input is-primary" type="url" placeholder="Image Url" name='image' alt="img" />
                <button type="submit" className='button is-primary' >Submit</button>
            </form >
        )
    }
}
export default AddForm