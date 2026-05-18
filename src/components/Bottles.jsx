import { use } from "react";

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);

    return (
        <div>
            <h1>Bottles: {bottles.length}</h1>
            {
                bottles.map(bottle => (
                    <div key={bottle.id}>
                        <h3>{bottle.name}</h3>
                        <img src={bottle.img} alt={bottle.name} width="200" />
                        <p>Price: ${bottle.price}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Bottles;
