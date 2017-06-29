import React from 'react';
import { Card } from 'elemental';
import './Code.less';

const Code = ({ location, innerWidth, innerHeight }) => (
	<Card style={{ backgroundColor: '#1e1e1e', wordWrap: 'break-word' }}>
		<code className="mtk11">window</code>
		<code className="mtk1">.</code>
		<code className="mtk10">open</code>
		<code className="mtk1">(</code>
		<code className="mtk7 hint" title="The URL to be loaded in the newly opened window.">{`'${location}'`}</code>
		<code className="mtk1">{', '}</code>
		<code className="mtk5 hint" title="A name for the new window.">null</code>
		<code className="mtk1">{', '}</code>
		<code className="mtk7 hint" title="An optional parameter listing the features (size, position, scrollbars, etc.) of the new window.">{`'width=${innerWidth},height=${innerHeight}'`}</code>
		<code className="mtk1">);</code>
	</Card>
);

export default Code;
