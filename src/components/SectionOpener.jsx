import React from 'react';

import {
	Form,
	FormField,
	FormInput,
	Button,
	FormRow,
	Card,
} from 'elemental';

const SectionOpener = ({
	location,
	innerWidth,
	innerHeight,
	onChangeLocation,
	onChangeInnerWidth,
	onChangeInnerHeight,
	onSubmit,
}) => (
	<Card>
		<Form onSubmit={ onSubmit }>
			<FormField label="Window location" htmlFor="window-location">
				<FormInput
					id="window-location"
					type="url"
					value={ location }
					onChange={ onChangeLocation }
					autoFocus
				/>
			</FormField>
			<FormRow>
				<FormField label="Inner width" width="one-half" htmlFor="inner-width">
					<FormInput
						id="inner-width"
						type="number"
						min={ 0 }
						value={ innerWidth }
						onChange={ onChangeInnerWidth }
					/>
				</FormField>
				<FormField label="Inner height" width="one-half" htmlFor="inner-height">
					<FormInput
						id="inner-height"
						type="number"
						min={ 0 }
						value={ innerHeight }
						onChange={ onChangeInnerHeight }
					/>
				</FormField>
			</FormRow>
			<Button submit type="primary" style={{ width: '100%' }}>
				Open window
			</Button>
		</Form>
	</Card>
);

export default SectionOpener;
