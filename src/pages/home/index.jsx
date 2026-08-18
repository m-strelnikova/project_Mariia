import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../components/product";
import Banner from "../../components/banner";

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
        <div><Banner /></div>
        <div>
            <h2>Товары</h2>
            <ul style={{ listStyleType: "none", display: "flex" }}>
                {items.map((item) => (
                    <li key={item.id}><Product item={item} /></li>
                ))}
            </ul>
        </div>


    </>)
}
export default Home;