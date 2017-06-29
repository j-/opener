import React from 'react';
import { Card } from 'elemental';

const Code = ({ location, innerWidth, innerHeight }) => (
	<Card style={{ backgroundColor: '#1e1e1e', wordWrap: 'break-word' }}>
		<code style={{ color: '#9cdcfe' }}>window</code>
		<code style={{ color: '#d4d4d4' }}>.</code>
		<code style={{ color: '#dcdcaa' }}>open</code>
		<code style={{ color: '#d4d4d4' }}>(</code>
		<code style={{ color: '#ce9178' }}>{`'${location}'`}</code>
		<code style={{ color: '#d4d4d4' }}>{', '}</code>
		<code style={{ color: '#569cd6' }}>null</code>
		<code style={{ color: '#d4d4d4' }}>{', '}</code>
		<code style={{ color: '#ce9178' }}>{`'width=${innerWidth},height=${innerHeight}'`}</code>
		<code style={{ color: '#d4d4d4' }}>);</code>
	</Card>
);

export default Code;
