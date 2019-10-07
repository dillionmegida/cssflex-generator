import React from 'react';
import './App.css';

import { AppTitle, Creator } from './components/AppDetails/AppDetails';
import Controls from './components/Controls/Control';

import Modal, { CssCodes } from './components/GeneratedCodes/GeneratedCodes';


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
    alignContent: 'flex-start',

    htmlArr: [
      '<div></div>',
			'<div></div>',
			'<div></div>'
    ],

    codeModal: false
  }
   //Adding More Divs 

  addDiv = () => {
    let initialN = this.state.nDivs;
    let initialHtmlArr = this.state.htmlArr;
    initialHtmlArr.push('<div></div>')
    this.setState({
      nDivs: initialN + 1,
      htmlArr: initialHtmlArr
    })
  }

  // delete divs
  delDiv = () => {
    let initialN = this.state.nDivs;
    let initialHtmlArr = this.state.htmlArr;
    if (initialN > 1) {
      initialHtmlArr.pop();
      this.setState({
        nDivs: initialN - 1,
        htmlArr: initialHtmlArr
      });
    }
  }

  // Functions that get user inputs and change state

  changeDivsWidth = event => {
    let currentValue = event.target.value;
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

  showCodeModal = () => {
    this.setState({
      codeModal: true
    })
  }

  closeCodeModal = () => {
    this.setState({
      codeModal: false
    })
  }

  render() {

    const cssParentArr = [
      'display: flex',
      `flex-wrap: ${this.state.flexWrap}`,
      `justify-content: ${this.state.justifyContent}`,
      `align-items: ${this.state.alignItems}`,
      `align-content: ${this.state.alignContent}`,
      'width: 65%',
      'background-color: #2f1d58',
      'height: 80vh',
      'overflow: auto',
      `flex-direction: ${this.state.flexDirection}`
      
    ]
  
    const childrenArr = [
      `width: ${this.state.divsWidth}`,
      `height: ${this.state.divsHeight}`,
      `margin: ${this.state.divsMargin}`,
      'background-color: lightblue'
    ]
    
    return (
      <main className='Main'>
        {this.state.codeModal ? 
          <Modal htmlArr={this.state.htmlArr} closeModalBtnClicked={this.closeCodeModal}>
            <CssCodes element='.FlexContainer' cssArr={cssParentArr} />
            <CssCodes element='.FlexContainer div' cssArr={childrenArr} />
          </Modal> :
          null
        }
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

          genCodeBtnclicked={this.showCodeModal}
        />
      </main>
    )
  }
}

export default App;