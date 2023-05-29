function ButtonComponent({w = "18.8rem", text}) {
    const style = {
        width: w,
        backgroundColor: "#3772FF",
        padding: "0.8rem 4.8rem",
        borderRadius: "0.4rem",
        fontFamily: 'Inter',
        color: "white",
        border: "none",
        fontWeight: "700",
        fontSize: "1.4rem"
    }
    return (
        <button style={style}>
            {text}
        </button>
    )
}

export default ButtonComponent