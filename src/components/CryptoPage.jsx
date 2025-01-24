import { useParams } from "react-router";
import './CryptoPage.css';
import usePetition from "../hooks/usePetition.js";
import {parseFloatNumber} from "../helpers/numbers.js";

export const CryptoPage = () => {
    const params = useParams();

    const [crypto, loading] = usePetition(`assets/${params.id}/history?interval=d1`);

    if (loading) { return <p>Loading...</p> }

    return (
        <>
            <h1>Crypto Details</h1>
            <table className="crypto-table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Price (USD)</th>
                </tr>
                </thead>
                <tbody>
                {loading || crypto.map(({ priceUsd, time }) => (
                    <tr key={time}>
                            <td>{new Date(time).toLocaleDateString()}</td>
                            <td>${parseFloatNumber(priceUsd, 2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};