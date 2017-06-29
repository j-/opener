import React from 'react';
import Code from './Code';

import {
	Form,
	FormLabel,
	Button,
	Card,
} from 'elemental';

const SectionCode = ({
	onSubmit,
	location,
	innerWidth,
	innerHeight,
}) => (
	<Card>
		<Form onSubmit={ onSubmit }>
			<FormLabel>JavaScript</FormLabel>
			<Code
				location={ location }
				innerWidth={ innerWidth }
				innerHeight={ innerHeight }
			/>
			<Button submit style={{ width: '100%' }}>
				Copy JavaScript
			</Button>
		</Form>
	</Card>
);

export default SectionCode;
