import React, { Component } from 'react';
import Ribbon from './Ribbon';

import {
	Form,
	FormField,
	FormInput,
	Button,
	FormRow,
} from 'elemental';

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
		return (
			<Form onSubmit={ this.handleSubmit } style={{ margin: '1em auto', minWidth: 400, maxWidth: 800 }}>
				<h1>Opener</h1>
				<Ribbon />
				<FormField label="Window Location">
					<FormInput
						type="url"
						value={ location }
						onChange={ this.handleChangeLocation }
					/>
				</FormField>
				<FormRow>
					<FormField label="Inner Width" width="one-half">
						<FormInput
							type="number"
							min={ 0 }
							value={ innerWidth }
							onChange={ this.handleChangeInnerWidth }
						/>
					</FormField>
					<FormField label="Inner Height" width="one-half">
						<FormInput
							type="number"
							min={ 0 }
							value={ innerHeight }
							onChange={ this.handleChangeInnerHeight }
						/>
					</FormField>
				</FormRow>
				<pre>{`window.open("${location}", null, "width=${innerWidth},height=${innerHeight}")`}</pre>
				<Button submit type="primary">Open</Button>
			</Form>
		);
	}
}
