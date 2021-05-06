import React, { Component } from 'react';
import './App.css';
import data from './foods.json';
import FoodBox from './component/FoodBox';
import 'bulma/css/bulma.css';
import AddForm from './component/AddForm';
import Search from './component/Search';
import TodaysFood from './component/TodaysFood';

class App extends Component {

  state = {
    foods: data,
    filtered: data,
    todaysFood: [],
    showForm: false
  };

  handleShowForm = (e) => {
    e.preventDefault()
    this.setState({ showForm: true })
  }

  handleAddFood = (e) => {
    e.preventDefault()

    const { name, image, calories, quantity } = e.target
    let newFood = {
      name: name.value,
      image: image.value,
      calories: calories.value,
      quantity: quantity.value
    }

    this.setState({ showForm: false }, () => {
      this.setState({
        foods: [newFood, ...this.state.foods]
      })
    })
  }

  handleSearch = (e) => {
    const { foods } = this.state;
    let filtered = foods.filter(food => {
      return food.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    this.setState({
      filtered: filtered
    })
  }

  handleAddTodaysFood = (food, quantity) => {

    food.quantity = quantity.value
    console.log(quantity)
    this.setState({
      todaysFood: [food, ...this.state.todaysFood]
    })
  }

  render() {
    const { showForm, foods, filtered, todaysFood } = this.state
    // eslint-disable-next-line no-unused-vars
    const { name, calories, image } = foods
    return (
      <div className='containers' >
        <div>
          <h1>List</h1>
          <Search onSearch={this.handleSearch} />
          {
            showForm ? <AddForm onAdd={this.handleAddFood} /> : (<button className="button is-info" onClick={this.handleShowForm}>Show form</button>)
          }
          {
            filtered.map((e, i) => {

              return <FoodBox key={i}
                name={e.name}
                calories={e.calories}
                image={e.image}
                onTodaysAdd={this.handleAddTodaysFood} />
            })}
        </div>
        <div>
          <TodaysFood todaysFood={todaysFood} />
        </div>
      </div>
    )
  }
}

export default App