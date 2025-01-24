import './Cryptography.css';
import {Link} from "react-router-dom";
import {parseFloatNumber} from "../helpers/numbers.js";

// eslint-disable-next-line react/prop-types
export const Cryptography = ({ id, symbol, name, priceUsd, supply, changePercent24Hr }) => {
    var changeClass

    if (changePercent24Hr > 0) {
        changeClass = "positive"
    } else { changeClass = "negative" }

    return (
        <div className="card">
            <h2>{name} ({symbol})</h2>
            <p>ID: {id}</p>
            <p>Price: ${parseFloat(priceUsd).toFixed(3)}</p>
            <p>Supply: {supply}</p>
            <p className={changeClass}>Variation last 24h: {parseFloatNumber(changePercent24Hr,2)}%</p>
            <Link to={`/cryptocoins/${id}`}>More info</Link>
        </div>
    );
};