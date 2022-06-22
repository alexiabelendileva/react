import './Body.css';
import Card from './Card';

function Body(){
    return(
        
        <div>
            <h1>Productos destacados</h1>
             <section className="cuerpo">
                <Card image='https://d3ugyf2ht6aenh.cloudfront.net/stores/814/563/products/buzo-sasuke-eyes-naruto1-9c59339d6f40d47ae616487433759311-640-0.jpg'product='Buzo Sasuke' description='Buzo canguro hoodie frizado blanco y negro oversized' price='$3485'/>
                <Card image='https://d3ugyf2ht6aenh.cloudfront.net/stores/814/563/products/eva-ok1-b7e54d56db397d2ccf16517754271629-640-0.jpg'product='Buzo Evangelion' description='Buzo canguro hoodie frizado negro con estampa' price='$3749'/>
                <Card image='https://http2.mlstatic.com/D_NQ_NP_800944-MLA47182203147_082021-O.webp'product='Remera Hanamichi' description='Remera algodón 100% color negro, estampa en b&n' price='$1960'/>
            </section>
        </div>
    );
}

export default Body;