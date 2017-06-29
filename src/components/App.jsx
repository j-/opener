import React, { Component } from 'react';
import Ribbon from './Ribbon';
import Code from './Code';

import {
	Form,
	FormField,
	FormInput,
	FormLabel,
	Button,
	FormRow,
	Card,
} from 'elemental';

const copy = require('clipboard-copy');

export default class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			location: 'https://skeoh.com/sizer/',
			innerWidth: 800,
			innerHeight: 500,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeLocation = this.handleChangeLocation.bind(this);
		this.handleChangeInnerWidth = this.handleChangeInnerWidth.bind(this);
		this.handleChangeInnerHeight = this.handleChangeInnerHeight.bind(this);
		this.handleWindowMessage = this.handleWindowMessage.bind(this);
	}

	componentDidMount () {
		window.addEventListener('message', this.handleWindowMessage);
	}

	componentWillUnmount () {
		window.removeEventListener('message', this.handleWindowMessage);
	}

	handleSubmit (e) {
		e.preventDefault();
		const {
			location,
			innerWidth,
			innerHeight,
		} = this.state;
		window.open(
			location,
			null,
			`width=${innerWidth},height=${innerHeight}`
		);
	}

	handleChangeLocation (e) {
		this.setState({
			location: e.target.value,
		});
	}

	handleChangeInnerWidth (e) {
		this.setState({
			innerWidth: e.target.value,
		});
	}

	handleChangeInnerHeight (e) {
		this.setState({
			innerHeight: e.target.value,
		});
	}

	handleWindowMessage (e) {
		const { innerWidth, innerHeight } = e.data;
		if (innerWidth) {
			this.setState({ innerWidth });
		}
		if (innerHeight) {
			this.setState({ innerHeight });
		}
	}

	render () {
		const {
			location,
			innerWidth,
			innerHeight,
		} = this.state;
		const code = `window.open('${location}', null, 'width=${innerWidth},height=${innerHeight}');`;
		return (
			<Form onSubmit={ this.handleSubmit }>
				<h1>Opener</h1>
				<Ribbon />
				<Card>
					<FormField label="Window location">
						<FormInput
							type="url"
							value={ location }
							onChange={ this.handleChangeLocation }
							autoFocus
						/>
					</FormField>
					<FormRow>
						<FormField label="Inner width" width="one-half">
							<FormInput
								type="number"
								min={ 0 }
								value={ innerWidth }
								onChange={ this.handleChangeInnerWidth }
							/>
						</FormField>
						<FormField label="Inner height" width="one-half">
							<FormInput
								type="number"
								min={ 0 }
								value={ innerHeight }
								onChange={ this.handleChangeInnerHeight }
							/>
						</FormField>
					</FormRow>
					<Button submit type="primary" style={{ width: '100%' }}>
						Open window
					</Button>
				</Card>
				<br />
				<Card>
					<FormLabel>JavaScript</FormLabel>
					<Code
						location={ location }
						innerWidth={ innerWidth }
						innerHeight={ innerHeight }
					/>
					<Button onClick={ () => copy(code) } style={{ width: '100%' }}>
						Copy JavaScript
					</Button>
				</Card>
			</Form>
		);
	}
}
