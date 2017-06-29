import React from 'react';

const Code = ({ location, innerWidth, innerHeight }) => (
	<pre>{`window.open("${location}", null, "width=${innerWidth},height=${innerHeight}")`}</pre>
);

export default Code;
