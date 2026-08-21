import deleteLogo from "../../assets/img/logo/delete.svg";
import axios from "axios";
import { useState } from "react";

function CarProduct({ item, onDelete }) {

    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div style={{
            display: "flex",
            background: "#FAFAFA",
            width: "100%",
            height: "134px",
            marginBottom: "67px",
            justifyContent: "space-between",
            padding: "21px",
            borderRadius: 10
        }}>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{ overflow: "hidden", marginRight: "36px" }}>
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "197px", height: "90px", objectFit: "contain", transform: "scale(1.9)", transformOrigin: "center center" }}
                    />
                </div>

                <div>
                    <h3 style={{
                        fontWeight: 400,
                        fontSize: "24px",
                        color: "#000",
                        maxWidth: "330px",
                        padding: "15px 0 15px 36px",
                        borderLeft: "1px solid rgba(0, 0, 0, 0.5)",
                        overflow: "hidden"
                    }}>{item.name}</h3>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                        gap: "10px"
                    }}>
                        <h3 style={{
                            fontSize: "14px",
                            color: "#666",
                            fontWeight: 400,
                        }}>ЦЕНА: </h3>

                        <h3>{item.price} €</h3>
                    </div>


                </div>

            </div>
            <div>
                <button style={{
                    background: mouseOver?  "#e9e6e6" : "#f3f3f3" ,
                    borderRadius: "100%",
                    width: "76px",
                    height: "76px",
                    border: "none"
                }}
                    onClick={() => onDelete(item.id)}
                    onMouseEnter={() => setMouseOver(true)}
                    onMouseLeave={() => setMouseOver(false)}>
                    <img src={deleteLogo} alt="delete" />
                </button></div>
        </div>
    )
}

export default CarProduct; 