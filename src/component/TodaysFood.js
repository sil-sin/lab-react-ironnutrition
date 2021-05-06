import React, { Component } from 'react'


class TodaysFood extends Component {

    render() {
        const { todaysFood } = this.props

        let total = todaysFood.reduce((acc, food) => {
            return acc + (food.calories * food.quantity)
        }, 0)

        return (
            <div>
                <div style={{ width: '300px' }}>
                    <h1>Todays Foods</h1>
                    {todaysFood.map((food, i) => {
                        <ul key={i}>
                            <li>
                                <h3>
                                    Name : {food.name}
                                </h3>
                                <p>Calories  {food.calories} cal</p>
                                <p>Quantity  {food.quantity} cal</p>
                                <p>Subtotal  {food.calories * food.quantity} cal</p>
                            </li>
                        </ul>
                    })
                    }
                    <h2> Total {total} calories</h2>
                </div>
            </div>
        )
    }
}

export default TodaysFood