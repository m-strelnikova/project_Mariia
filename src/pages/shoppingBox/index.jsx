import axios from "axios";
import { useState, useEffect } from "react";
import CarProduct from "../../components/carProduct";

async function getCarItems() {
    try {
        const response = await axios.get(
            "https://6a833c1acb486d2434037e9b.mockapi.io/carItems",
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

function ShoppingBox() {
    const [carItems, setCarItems] = useState([])

    useEffect(() => {
        async function loadItems() {
            const data = await getCarItems();
            setCarItems(data);
        }
        loadItems();
    }, [])


    // Функция удаления товара
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://mockapi.io{id}`);
            setCarItems((prev) => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error("Ошибка при удалении элемента:", error);
            alert("Не удалось удалить товар из корзины");
        }
    };

    if (carItems.length === 0) {
        return (
            <div style={{ padding: "0 13.02%" }}>
                <h1 style={{
                    padding: "50px 0",
                    fontWeight: 700,
                    width: "100%",
                    fontSize: "36px",
                    borderBottom: "1px solid #eaeaea"
                }}>Корзина</h1>
                <p style={{ fontSize: '24px', textAlign: 'center' }}>Корзина пуста</p>
            </div>);
    }


    return (<>

        <div style={{ padding: "0 13.02%" }}>
            <h1 style={{
                padding: "50px 0",
                fontWeight: 700,
                width: "100%",
                fontSize: "36px",
                borderBottom: "1px solid #eaeaea"
            }}>Корзина</h1>

            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "114px",
                gap: "10%",
            }}>
                <div style={{
                    width: "100%",
                    display: "flex",
                }}>
                    <ul style={{
                        width: "100%",
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10%",
                        justifyContent: "space-between"
                    }}>
                        {carItems.map((carItem) => {
                            return (
                                <li key={carItem.id}>
                                    <CarProduct item={carItem} onDelete={handleDelete} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div style={{
                    minWidth: "388px",
                    minHeight: "428px",
                    background: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    padding: "26px 28px 32px 28px",
                    justifyContent: "space-between",
                }}>
                    <h2 style={{
                        fontWeight: 700,
                        width: "100%",
                        fontSize: "36px",
                        padding: "0 30%"
                    }}> Итого</h2>

                    <ul style={{
                        width: "100%",
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "41px",
                        height: "fit-content"
                    }}> {carItems.map((carItem) => {
                        return (
                            <li key={carItem.id}>
                                <span style={{
                                    fontWeight: 400,
                                    fontSize: "24px",
                                    color: "#000000bd",
                                }}>{carItem.name}</span>
                            </li>
                        )
                    })}</ul>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        width: "100%",
                        borderTop: "1px solid rgba(0, 0, 0, 0.5)",
                        paddingTop: "10px"
                    }}>
                        <h3 style={{
                            fontSize: "14px",
                            color: "#000",
                            fontWeight: 600,
                        }}>ЦЕНА: </h3>

                        <h3>{carItems.reduce((acc, item) => {
                            return Number(item.price) + acc;
                        }, 0)} €</h3>

                    </div>

                </div>
            </div>
        </div>
    </>)
}
export default ShoppingBox;