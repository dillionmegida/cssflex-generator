import React from 'react';
import './App.css';

import { AppTitle, Creator } from './components/AppDetails/AppDetails';
import Controls from './components/Controls/Control';

import Modal, { CssCodes } from './components/GeneratedCodes/GeneratedCodes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.repeatComp = this.repeatComp.bind(this);

    this.state = {
      //Number of Divs
      nDivs: [{
        divWidth: 100,
        divHeight: 100,
        divMargin: 5,
      }],
      selectedDiv: null,
      // Handling the state of the styles
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
  }

  //Adding More Divs 
  addDiv = () => {
    let initialN = this.state.nDivs;
    initialN.push({
      divWidth: 100,
      divHeight: 100,
      divMargin: 5,
    });
    let initialHtmlArr = this.state.htmlArr;
    initialHtmlArr.push('<div></div>')
    this.setState({
      nDivs: initialN,
      htmlArr: initialHtmlArr
    })
  }

  // delete divs
  delDiv = () => {
    let initialN = this.state.nDivs;
    initialN.pop();
    let initialHtmlArr = this.state.htmlArr;
    if (initialN.length > 0) {
      initialHtmlArr.pop();
      this.setState({
        nDivs: initialN,
        htmlArr: initialHtmlArr
      });
    }
  }

  // Functions that get user inputs and change state

  changeDivsWidth = event => {
    let currentValue = parseInt(event.target.value, 10);
    const divArr = this.state.nDivs;
    divArr[this.state.selectedDiv].divWidth = currentValue;
    this.setState({
      nDivs: divArr
    })
  }

  changeDivsHeight = event => {
    let currentValue = parseInt(event.target.value, 10);
    const divArr = this.state.nDivs;
    divArr[this.state.selectedDiv].divHeight = currentValue;
    this.setState({
      nDivs: divArr
    })
  }

  // Change Margin
  changeDivsMargin = event => {
    let currentValue = parseInt(event.target.value, 10);
    const divArr = this.state.nDivs;
    divArr[this.state.selectedDiv].divMargin = currentValue;
    this.setState({
      nDivs: divArr
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

  onDivSelect(index) {
    if (this.state.selectedDiv === index) {
      this.setState({selectedDiv: null});
    } else {
      this.setState({selectedDiv: index});
    }
  }

  repeatComp(divArr) {
    let renderDivs = [];
    for (let i = 0; i < divArr.length; i++) {
      renderDivs.push(<div className={this.state.selectedDiv === i ? "selectedDiv" : undefined} onClick={this.onDivSelect.bind(this, i)} key={i + "renderedDiv"} style={{backgroundColor: 'lightblue', width: this.state.nDivs[i].divWidth, height: this.state.nDivs[i].divHeight, margin: this.state.nDivs[i].divMargin}} />);
    }
    return renderDivs;
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
          {this.repeatComp(this.state.nDivs)}
        </section>
        <Controls
          addDiv = {this.addDiv}
          delDiv = {this.delDiv}
          
          DivsHeight = {this.state.selectedDiv !== null ? this.state.nDivs[this.state.selectedDiv].divHeight : 0}
          DivsWidth = {this.state.selectedDiv !== null ? this.state.nDivs[this.state.selectedDiv].divWidth : 0}
          DivsMargin = {this.state.selectedDiv !== null ? this.state.nDivs[this.state.selectedDiv].divMargin : 0}

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