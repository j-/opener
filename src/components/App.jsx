import React, { Component } from 'react';
import Ribbon from './Ribbon';
import SectionOpener from './SectionOpener';
import SectionCode from './SectionCode';

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
			locationEscaped: 'https://skeoh.com/sizer/',
			innerWidth: 800,
			innerHeight: 500,
		};
		this.handleOpenWindow = this.handleOpenWindow.bind(this);
		this.handleCopyCode = this.handleCopyCode.bind(this);
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

	handleOpenWindow (e) {
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

	handleCopyCode (e) {
		e.preventDefault();
		const {
			locationEscaped,
			innerWidth,
			innerHeight,
		} = this.state;
		copy(
			`window.open('${locationEscaped}', null, 'width=${innerWidth},height=${innerHeight}');`
		);
	}

	handleChangeLocation (e) {
		const location = e.currentTarget.value;
		const locationEscaped = encodeURI(location).replace(/'/g, '\\\'');
		this.setState({
			location,
			locationEscaped,
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
			locationEscaped,
			innerWidth,
			innerHeight,
		} = this.state;
		return (
			<div>
				<Ribbon />
				<h1>Opener</h1>
				<SectionOpener
					location={ location }
					innerWidth={ innerWidth }
					innerHeight={ innerHeight }
					onChangeLocation={ this.handleChangeLocation }
					onChangeInnerWidth={ this.handleChangeInnerWidth }
					onChangeInnerHeight={ this.handleChangeInnerHeight }
					onSubmit={ this.handleOpenWindow }
				/>
				<br />
				<SectionCode
					locationEscaped={ locationEscaped }
					innerWidth={ innerWidth }
					innerHeight={ innerHeight }
					onSubmit={ this.handleCopyCode }
				/>
			</div>
		);
	}
}
