import React from 'react';
import './GeneratedCodes.css';

const Tab = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

let HtmlContainer = props => {
	return (
		<section className='HtmlCodes'>
			<p>
				<span>{'<!-- Both files must be in the same level of location -->'}</span>
					<br/>
					<br/>
				<span>{'<!-- index.html -->'}</span>
					<br/>
				<span>{'<!DOCTYPE html>'}</span>
					<br/>
				<span>{'<html>'}</span>
					<br/>
				<span>{Tab}{'<head>'}</span>
					<br/>
				<span>{Tab}{Tab}{'<title>CSS Template</title>'}</span>
					<br/>
				<span>{Tab}{Tab}{"<link rel='stylesheet' href='./styles.css' type='text/css' />"}</span>
					<br/>
				<span>{Tab}{'</head>'}</span>
					<br/>
				<span>{Tab}{'<body>'}</span>
					<br/>				
				<span>{Tab}{Tab}{"<section class='FlexContainer'>"}</span>
					<br/>
				{props.htmlArr.map((element, index) => {
					return <span key={index}>{Tab}{Tab}{Tab}{element}<br/></span>
				})}
				<span>{Tab}{Tab}{'</section>'}</span>
					<br/>
				<span>{Tab}{'</body>'}</span>
					<br/>
				<span>{'</html>'}</span>
			</p>
		</section>
	)
}

let CssContainer = props => {
	return (
		<section className='CssCodes'>
			<span>{'/* styles.css */'}</span>
				<br/>
			{props.children}
		</section>
	)
}

let CssCodes = props => {
	return (
		<React.Fragment>
			<p>
				<span>{props.element} {'{'}</span>
					<br/>
				{props.cssArr.map((styles, index) => {
					return (
					<span key={index}>{Tab}{styles};<br/></span>
					)
				})}
				<span>}</span>
			</p>
		</React.Fragment>
	)
}

let Modal = props => {
	return (
		<section className='Modal'>
			<button onClick={props.closeModalBtnClicked}>Close Modal</button>
			<HtmlContainer htmlArr={props.htmlArr} />
			<CssContainer>
				{props.children}
			</CssContainer>
		</section>
	)
}
export default Modal;
export { CssCodes };