// src/QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
const QRCodeGenerator = () => {
const [text, setText] = useState('');
const handleChange = (e) => {
setText(e.target.value);

};
return (
<div>
<h1>QR Code Generator</h1>
<input
type="text"
value={text}
onChange={handleChange}
placeholder="Enter text or URL"
/>
<div>
{text && (
<QRCode bn
value={text}
size={256}
bgColor={"#ffffff"}
fgColor={"#000000"}
level={"H"}
includeMargin={true}
/>
)}
</div>
</div>
);
};
export default QRCodeGenerator;