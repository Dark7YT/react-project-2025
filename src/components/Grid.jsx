import './Grid.css';
import { Cryptography } from '/src/components/Cryptography';
import usePetition from "../hooks/usePetition.js";

function Grid() {

    const [cryptos, loading] = usePetition('assets');

    if (loading) { return <p>Loading...</p> }

    return (
        <>
            <h1>Cryptography List - Live Update</h1>
            <div className="card-container">
                {!loading && cryptos.map(({ id, name, symbol, priceUsd, supply, changePercent24Hr }) => (
                    <Cryptography
                        key={id}
                        id={id}
                        name={name}
                        symbol={symbol}
                        priceUsd={priceUsd}
                        supply={supply}
                        changePercent24Hr={changePercent24Hr}
                    />
                ))}
            </div>
        </>
    );
}

export default Grid;