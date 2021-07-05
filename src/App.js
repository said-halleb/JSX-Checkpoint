
import './App.css';
import './styles.css';
import  imagetop from './imageInSrc.jpg';
function App() {
  return (
    <div className="App">
        <div className="content">
  <div style={{border:'1px solid black',maxWidth:'100vw',padding: '20px 0px'}}>

<h1 className="title red">Halleb Said</h1>

<br />

<img src={imagetop} alt="image1" />

<br />

<img src="/imageInPublic.jpg" alt="image2" />

</div>

<vidéo width="320" height="240" contrôles>

<source src="maVidéo.mp4" type="video/mp4" />

</vidéo>
    </div>
        </div>
  );
}

export default App;
