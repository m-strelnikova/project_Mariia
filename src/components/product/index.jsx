import axios from "axios";
import { useState } from "react";

async function postProducts(item) {
    try {
        const response = await axios.post(
            "https://6a833c1acb486d2434037e9b.mockapi.io/carItems",
            {
                image: item.image,
                name: item.name,
                price: item.price,
                id: item.id
            }
        );
        console.log(response);
       return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function Product({ item }) {

    const [ isAdded, setIsAdded ] = useState(false); 

    async function addInBox(item) {
        const success = await postProducts(item);

        if (success) {
            setIsAdded(true);
        }
    }

    return (
        <div style={{ display: "flex", width: "25%", flexDirection: "column" }}>
            <img
                src={item.image}
                alt={item.name}
            />
            <h2>{item.name}</h2>
            <div>
                <h3>ЦЕНА</h3>
                <h4>{item.price} €</h4>
            </div>

            <button onClick={() => addInBox(item)} disabled={isAdded}>
                <img src="/src/assets/img/logo/add.svg" alt="add into busket" />
            </button>
        </div>
    )
}
export default Product; 