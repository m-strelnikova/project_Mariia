import instagramLogo from "../../assets/img/logo/instagram.svg";
import facebookLogo from "../../assets/img/logo/facebook.svg";
import twitterLogo from "../../assets/img/logo/twitter.svg"

const networks = [
    {
        name: "facebook",
        src: facebookLogo,
        id: 1
    },
    {
        name: "twitter",
        src: twitterLogo,
        id: 2
    },
    {
        name: "instagram",
        src: instagramLogo,
        id: 3
    },
]

function Footer() {
    return (
        <div style={{
            background: "#232425",
            display: "flex",
            justifyContent: "space-between",
            color: "#fff",
            width: "100%",
            height: "347px",
            padding: "64px 13.02%",
            marginTop: "172px",
        }}>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                <div>
                    <h4 style={{
                        fontWeight: 400, fontSize: "24px", color: "#fff", paddingBottom: "26px"
                    }}>Контакты</h4>
                    <p style={{
                        fontWeight: 400, fontSize: "18px", color: "rgba(255, 255, 255, 0.5)", paddingTop: "13px"
                    }}>8 800 000 00 00</p>
                    <p style={{
                        fontWeight: 400, fontSize: "18px", color: "rgba(255, 255, 255, 0.5)", paddingTop: "13px"
                    }}>emailexample@email.com</p>
                </div>
                <span style={{
                    fontWeight: 400, fontSize: "24px", color: "rgba(255, 255, 255, 0.5)"
                }}>2024 Сникер-магазин. Все права защищены</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                <div style={{ textAlign: "end" }}>
                    {networks.map((network) => {
                        return (
                            <img
                                src={network.src}
                                alt={network.name}
                                key={network.id}
                                style={{ paddingLeft: "26px" }} />
                        )
                    })}
                </div>
                <span style={{
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "rgba(255, 255, 255, 0.5)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                    width: "407px",
                    textAlign: "start",
                    padding: "8px 8px 15px 0", 
                    
                }}> Введите свой email:
                </span>
            </div>
        </div>
    )
}
export default Footer;