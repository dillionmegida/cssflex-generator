import React from 'react';
import './App.css';

import { AppTitle, Creator } from './components/AppDetails/AppDetails';
import Controls from './components/Controls/Control';


// Sample Div used to illustrate children
const SampleDiv = props => (
  <div style={{backgroundColor: 'lightblue', margin: props.margin, height: props.divsHeight, width: props.divsWidth}}>
          
  </div>
);

// Function for repeating components
const repeatComp = (comp, number) => {
  let CompArr = [];
  for(let count = 1; count <= number; count++) {
    CompArr.push(comp);
  }
  // console.log(ComDisplay);
  return CompArr.map((comp, index) => (
    <React.Fragment key={index}>
      { comp }
    </React.Fragment>
  ))
}

class App extends React.Component {

  state = {
    //Number of Divs
    nDivs: 3,
    // Handling the state of the styles
    divsWidth: '100px',
    divsHeight: '100px',
    divsMargin: '5px',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  }


   //Adding More Divs 

  addDiv = () => {
    let initialN = this.state.nDivs;
    this.setState({
      nDivs: initialN + 1
    })
  }

  // delete divs
  delDiv = () => {
    let initialN = this.state.nDivs;
    if (initialN > 1) {
      this.setState({
        nDivs: initialN - 1
      });
    }
  }

  // Functions that get user inputs and change state

  changeDivsWidth = event => {
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

  // Change Margin
  changeDivsMargin = event => {
    let currentValue = event.target.value;
    // console.log(currentValue);
    this.setState({
      divsMargin: currentValue + 'px'
    })
  } 

  changeFlexWrap = event => {
    let currentValue = event.target.value;
    this.setState({
      flexWrap: currentValue
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

  changeAlignContent = event => {
    let currentValue = event.target.value;
    this.setState({
      alignContent: currentValue
    })
  }


  render() {
    return (
      <main className='Main'>
        <div className='AppInfo'>
            <h1 className='AppTitle'>{ AppTitle }</h1>
            <p>Built by <a className='creator' href='https://twitter.com/iamdillion' title='Creator'>{ Creator }</a></p>
            <p><a className='contribute' href='https://github.com/dillionmegida/cssflex-generator' title='GitHub Repository'>Contribute to this project</a></p>
        </div>
        <section
          className='FlexContainer'
          style={{
            display: 'flex',
            flexWrap: this.state.flexWrap,
            flexDirection: this.state.flexDirection,
            justifyContent: this.state.justifyContent,
            alignItems: this.state.alignItems,
            alignContent: this.state.alignContent
          }}
        >

          {
            repeatComp(
               <SampleDiv divsHeight={this.state.divsHeight} divsWidth={this.state.divsWidth} margin={this.state.divsMargin} />,
               this.state.nDivs
            )
          }

        </section>
        <Controls
          addDiv = {this.addDiv}
          delDiv = {this.delDiv}
          
          DivsHeight = {this.state.divsHeight.slice(0, -2)}
          DivsWidth = {this.state.divsWidth.slice(0, -2)}
          DivsMargin = {this.state.divsMargin.slice(0, -2)}

          changeDivsWidth = {this.changeDivsWidth}
          changeDivsHeight = {this.changeDivsHeight}
          changeDivsMargin = {this.changeDivsMargin}
          changeFlexWrap = {this.changeFlexWrap}
          changeFlexDirection = {this.changeFlexDirection}
          changeJustifyContent = {this.changeJustifyContent}
          changeAlignItems = {this.changeAlignItems}
          changeAlignContent = {this.changeAlignContent}
        />
      </main>
    )
  }
}

export default App;