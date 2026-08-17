import { useState, useEffect } from "react";
import axios from "axios";

async function getProducts() {
    try {
        const response = await axios.get(
            "https://6a833c1acb486d2434037e9b.mockapi.io/productData",
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

function Home() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setItems(data);
        }

        loadProducts();
    }, []);

    return (<>

        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <img
                        src={item.image}
                        alt={item.name}
                    />

                    <h2>{item.name}</h2>

                    <p>{item.price} €</p>
                </div>
            ))}
        </div>


    </>)
}
export default Home;