import React from 'react';
import './Controls.css';

let Controls = (props) => {
	return (
		<section className="Controls">
			<button onClick={props.addDiv} className="AddDivBtn">
				Add div
			</button>
			<div>
				<label>Height of divs (px)</label>
				<input value={props.DivsHeight} onChange={props.changeDivsHeight} type="number" />
			</div>
			<div>
				<label>Width of divs (px)</label>
				<input value={props.DivsWidth} onChange={props.changeDivsWidth} type="number" />
			</div>
			<div>
				<label>Margin of divs (px)</label>
				<input value={props.DivsMargin} onChange={props.changeDivsMargin} type="number" />
			</div>
			<div>
				<label>flex-wrap</label>
				<select onChange={props.changeFlexWrap}>
					<option>nowrap</option>
					<option>wrap</option>
					<option>wrap-reverse</option>
				</select>
			</div>
			<div>
				<label>flex-direction</label>
				<select onChange={props.changeFlexDirection}>
					<option>row</option>
					<option>column</option>
					<option>row-reverse</option>
					<option>column-reverse</option>
				</select>
			</div>
			<div>
				<label>justify-content</label>
				<select onChange={props.changeJustifyContent}>
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
				<select onChange={props.changeAlignItems}>
					<option>flex-start</option>
					<option>flex-end</option>
					<option>center</option>
					<option>stretch</option>
					<option>baseline</option>
				</select>
			</div>
			<div>
				<label>align-content</label>
				<select onChange={props.changeAlignContent}>
					<option>flex-start</option>
					<option>flex-end</option>
					<option>center</option>
					<option>stretch</option>
					<option>baseline</option>
				</select>
			</div>
			{/*
            Not enabled yet
            <button className='GenCode'>
          	Generate Code
          </button>
            */}
		</section>
	);
};

export default Controls;
