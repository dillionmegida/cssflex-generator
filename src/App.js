import React from 'react';
import './App.css';

import { AppTitle } from './components/AppDetails/AppDetails';

class App extends React.Component {

  state = {
    nDivs: 3,
    // Handling the state of the styles
    divsWidth: '200px',
    divsHeight: '170px',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }


  // Functions that get user inputs and change state

  changeDivWidth = event => {
    let currentValue = event.target.value;
    // console.log(currentValue);
    this.setState({
      divsWidth: currentValue + 'px'
    })
  }

  changeDivsHeight = event => {
    let currentValue = event.target.value;
    // console.log(currentValue);
    this.setState({
      divsHeight: currentValue + 'px'
    })
  }

  changeFlexDirection = event => {
    let currentValue = event.target.value;
    this.setState({
      flexDirection: currentValue
    })
  }

  changeJustifyContent = event => {
    let currentValue = event.target.value;
    this.setState({
      justifyContent: currentValue
    })
  }
  
  changeAlignItems = event => {
    let currentValue = event.target.value;
    this.setState({
      alignItems: currentValue
    })
  }


  render() {
    return (
      <main className='Main'>
        <h1 className='AppTitle'>{ AppTitle }</h1>
        <section
          className='FlexContainer'
          style={{
            display: 'flex',
            flexWrap: this.state.flexWrap,
            flexDirection: this.state.flexDirection,
            justifyContent: this.state.justifyContent,
            alignItems: this.state.alignItems
          }}
        >
          <div style={{backgroundColor: 'lightblue', margin: '20px', height: this.state.divsHeight, width: this.state.divsWidth}}>
          
          </div>

          <div style={{backgroundColor: 'lightblue', margin: '20px', height: this.state.divsHeight, width: this.state.divsWidth}}>
          
          </div>

          <div style={{backgroundColor: 'lightblue', margin: '20px', height: this.state.divsHeight, width: this.state.divsWidth}}>
          
          </div>

        </section>
        <section className='Controls'>
          <button className='AddDivBtn'>Add div</button>

          <div>
            <label>Height of divs</label>
            <input onChange={this.changeDivsHeight} type='number' />
          </div>

          <div>
            <label>Width of divs</label>
            <input onChange={this.changeDivWidth} type='number' />
          </div>

          <div>
            <label>Flex Direction</label>
            <select onChange={this.changeFlexDirection}>
              <option>row</option>
              <option>column</option>
              <option>row-reverse</option>
              <option>column-reverse</option>
            </select>
          </div>

          <div>
            <label>justify-content</label>
            <select onChange={this.changeJustifyContent}>
              <option>flex-start</option>
              <option>flex-end</option>
              <option>center</option>
              <option>space-evenly</option>
              <option>space-around</option>
              <option>space-between</option>
            </select>
          </div>

          <div>
            <label>align-items</label>
            <select onChange={this.changeAlignItems}>
              <option>flex-start</option>
              <option>flex-end</option>
              <option>center</option>
              <option>stretch</option>
              <option>baseline</option>
            </select>
          </div>
        </section>
      </main>
    )
  }
}

export default App;