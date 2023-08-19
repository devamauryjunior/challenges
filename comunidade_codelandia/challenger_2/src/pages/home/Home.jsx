import React, {useState, useEffect} from "react";
import Shoes from "../../components/Shoes/Shoes";
import './style.css';
import imagen1 from './../../assets/img/shoe1.svg';
import imagen2 from './../../assets/img/shoe2.svg';
import imagen3 from './../../assets/img/shoe3.svg';
import imagen4 from './../../assets/img/shoe4.svg';
import imagen5 from './../../assets/img/shoe5.svg';
import imagen6 from './../../assets/img/shoe6.svg';
import imagen7 from './../../assets/img/shoe7.svg';

function Home() {
    const [arrImages, setImagesArray] = useState([]);
    useEffect(() => {
        setImagesArray([
            imagen1,
            imagen2,
            imagen3,
            imagen4,
            imagen5,
            imagen6,
            imagen7,
        ])
    }, [])
    
    return (
        <div className="container">
            <div className="container-1">
                <div className="box-1">
                    <h3 className="b1-bonus">Ganhe R$ 10,00 de desconto no frete</h3>
                    <h2 className="b1-title">JordanShoes</h2>
                </div>
                <div className="box-2">
                    <h1 className="b2-title">A melhor loja de Jordan</h1>
                    <p className="b2-text">
                        O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.
                    </p>
                </div>
            </div>
            <div className="container-2">
                <div className="box-3">
                    <h2 className="b3-title">
                        Destaques
                    </h2>
                    <p className="b3-text">
                        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. 
                    </p>
                </div>
            </div>
            {
                arrImages.map((srcImage, idx) => <Shoes key={idx} image={srcImage} />)
            }
            <div className="footer">
                <p className="ft-text">
                    Todos os direitos reservados.
                </p>
            </div>
        </div>

    )
}

export default Home;
