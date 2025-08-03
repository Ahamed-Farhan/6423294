import { useState } from "react";

export function CurrencyConvertor() {

    const [val, setVal] = useState('');
    const [curr, setCurr] = useState('');
    const color = { color: "green" }

    const convertAmounttoEuro = () => {
        const euro = val * 80;
        alert("Converting to " + curr + " Amount is " + euro);
    }

    const centerAlign = {
        textAlign: "center"
    }
    return (
        <div>

            <h1 style={color}>Currency Convertor!!!</h1>

            <tr>
                <td><label>Amount:</label></td>
                <td><input type="text" onChange={(e) => setVal(e.target.value)} /></td>
            </tr>
            <tr>
                <td><label>Currency:</label></td>
                <td><textarea onChange={(e) => setCurr(e.target.value)}></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td style={centerAlign}><button onClick={(convertAmounttoEuro)}>Submit</button></td></tr>
        </div>
    );
}
