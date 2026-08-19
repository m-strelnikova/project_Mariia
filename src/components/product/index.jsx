import axios from "axios";
import { useState } from "react";
import buttonHover from "../../assets/img/buttonHovering.svg";
import buttonGray from "../../assets/img/buttonGray.svg";

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

    const [isAdded, setIsAdded] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    async function addInBox(item) {
        const success = await postProducts(item);

        if (success) {
            setIsAdded(true);
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid rgba(0, 0, 0, 0.15)",
            borderRadius: "42px",
            width: "386px",
            height: "393px",
            marginTop: "45px", 
            justifyContent: "space-between", 
            padding: "49px 39px 39px 39px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "278px", height: "127px", objectFit: "cover", }}
                />

                <h3 style={{
                    fontWeight: 400,
                    fontSize: "24px",
                    color: "#000", 
                    paddingTop: "32px"
                }}>{item.name}</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <h3 style={{
                        fontSize: "14px",
                        color: "#666",
                        fontWeight: 400,
                    }}>ЦЕНА</h3>
                    <h3>{item.price} €</h3>
                </div>

                <button
                    onClick={() => addInBox(item)}
                    disabled={isAdded}
                    onMouseEnter={() => setMouseOver(true)}
                    onMouseLeave={() => setMouseOver(false)}
                    style={{ width: "fit-content", height: "fit-content", borderRadius: "100%", border: "none"}} 
                >
                    <img
                        alt="add into basket"
                        src={isAdded ? buttonGray : mouseOver ? buttonHover : buttonGray}
                    />
                </button>
            </div>


        </div>
    )
}
export default Product;

