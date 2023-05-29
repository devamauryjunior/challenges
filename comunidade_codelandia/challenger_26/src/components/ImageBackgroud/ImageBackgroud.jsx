function ImageBackgroud(props) {
    const {artistas, profissao, imagem} = props;
    return (
        <div className="img-artistas" style={{
            backgroundImage: `url(${imagem})`
        }}>
            <p className="img-artistas-name">{artistas}</p>
            <p className="img-artistas-profissao">{profissao}</p>
        </div>
    )
}

export default ImageBackgroud