import React, { Component } from 'react'
import 'bulma/css/bulma.css';
// eslint-disable-next-line no-unused-vars
import foods from '../foods.json';

class FoodBox extends Component {
    state = {
        quantity: 0
    }

    handleChange = (e) => {
        this.setState({
            quantity: e.target.value

        })
        console.log(e.quantity)
    }

    render() {
        const { name, calories, image, onTodaysAdd, food } = this.props
        const { quantity } = this.state
        return (
            <div>
                <div className="box" style={{ width: '30%' }}>
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={image} alt={name} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p style={{ width: '100px' }} >
                                    <strong>{name}</strong> <br />
                                    <small>{calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input onChange={this.handleChange} style={{ width: '100px' }} className="input" type="number" name='quantity' placeholder='Quantity' />
                                </div>
                                <div className="control">
                                    <button onClick={() => { onTodaysAdd(food, quantity) }} className="button is-info">
                                        +
            </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default FoodBox