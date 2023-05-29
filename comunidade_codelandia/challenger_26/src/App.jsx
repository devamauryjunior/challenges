import seachIcon from './../public/seach.svg'
import ButtonComponent from './components/ButtonComponent/ButtonComponent'
import ImageComponent from './components/ImageCompoent/ImageComponent'
import ImageBackgroud from './components/ImageBackgroud/ImageBackgroud'
import Image1 from './assets/img/first.jpeg'

import Image2 from './assets/img/second.jpeg'
import Image3 from './assets/img/third.jpeg'
import Image4 from './assets/img/room.jpeg'

import Image5 from './assets/img/fifth.jpeg'
import Image6 from './assets/img/sixth.jpeg'
import Image7 from './assets/img/seventh.jpeg'

import './App.css'

function App() {
  const pathImagesFront = [Image2, Image3, Image4];
  const pathImagesBack = [
    {nomeDaArtista: "Sabine Lowe", profissao: "Design e Fotógrafa", img: Image5},
    {nomeDaArtista: "Eleanor Pena", profissao: "Escritora e Design", img: Image6},
    {nomeDaArtista: "Leslie Alexander", profissao: "Diretora de arte", img: Image7}
  ];

  return (
    <div className="App">
      <nav className='navbar'>
        <p>Art.</p>
        <div className="seach">
          <input type="text" placeholder='Buscar'/>
          <img className='navbar-img' src={seachIcon}/>
        </div>
        <ButtonComponent text="Entrar"/>
      </nav>
      <div className="container">
        <div className="ct1">
          <div className="ct1-text">
            <h1>Descubra novos artistas e suas obras</h1>
            <p className='ct1-text-firstp'>Uma nova geração de jovens artistas surgem</p>
            <ButtonComponent w="18.8rem" text="Explorar"/>
            <ul className='stats'>
              <li>
                <p className='stats-number'>+2 mil</p>
                <p className='stats-class'>Artistas</p>
              </li>
              <li>
                <p  className='stats-number'>+7mil</p>
                <p className='stats-class'>Vendas</p>
              </li>
              <li>
                <p  className='stats-number'>+16 mil</p>
                <p className='stats-class'>Avaliações</p>
              </li>
            </ul>
          </div>
          <img src={Image1} alt="Imagem de Sergio Rdriguez" />
        </div>
        <div className="ct2">
          <div className="ct2-images">
            {
              pathImagesFront.map((img, idx) => <ImageComponent key={idx} caminhoDaImagem={img}/>)
            }
          </div>
          <div className="ct2-text">
            <h2>Confira as últimas coleções</h2>
            <ButtonComponent w="18.8rem" text="Ver mais"/>
          </div>
        </div>
      </div>
      <div className="container2">
        <p className='ct3-p'>Artistas</p>
        {
          pathImagesBack.map((value, idx) => <ImageBackgroud key={idx} artistas={value.nomeDaArtista} profissao={value.profissao} imagem={value.img}/>)
        }
      </div>
      <div className="footer">
        <p>Art.</p>
        <ul>
          <li>Inicio</li>
          <li>Buscar</li>
          <li>Explorar</li>
          <li>Sobre Nós</li>
        </ul>
      </div>
    </div>
  )
}

export default App
