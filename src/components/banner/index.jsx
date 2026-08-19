import banner from "../../assets/img/Banner.svg";
function Banner() {
    return (
        <div style={{
            width: "100%",
            padding: "0 12%", 
            margin: "28px 0 72px 0"
        }}>
            <img
                src={banner}
                alt="Banner. UP to 50% OFF"
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                }}
            />
        </div>
    );
}
export default Banner; 