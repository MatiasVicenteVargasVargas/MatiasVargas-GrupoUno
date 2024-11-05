import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Card from "./Components/Card/Card";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    
    <div className="min-h-screen">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 ">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          <div className="rounded-2xl mb-4">
            <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D" 
            className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-8">
            <Card img="https://nikeclprod.vtexassets.com/arquivos/ids/207138-800-800?v=637691516202530000&width=800&height=800&aspect=true" 
            title="Nike Dunk Low" 
            category="Nike" 
            price="119.990"
            />
            <Card img="https://nikeclprod.vtexassets.com/arquivos/ids/832395/CW4555_003_A_PREM.jpg?v=638315352190900000" 
            title="Air Jordan 4 Retro" 
            category="Jordan" 
            price="748.146"
            />
            <Card img="https://nikeclprod.vtexassets.com/arquivos/ids/1031206/DQ8426_061_A_PREM.jpg?v=638548410797330000" 
            title="Air Jordan 1 MID" 
            category="Jordan" 
            price="134.990"
            />
            <Card img="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg" 
            title="Adidas Sport Training" 
            category="Adidas" 
            price="44.990"
            />
            <Card img="https://www.blockstore.cl/cdn/shop/products/p-1BM01875125-5_1800x.jpg?v=1675364510" 
            title="Fila Teratach 600" 
            category="Fila" 
            price="47.990"
            />
            <Card img="https://nikeclprod.vtexassets.com/arquivos/ids/160788-800-800?v=637654399741130000&width=800&height=800&aspect=true" 
            title="Nike Air Force" 
            category="Nike" 
            price="119.990"
            />
            <Card img="https://nikeclprod.vtexassets.com/arquivos/ids/1049612-800-800?v=638551101673500000&width=800&height=800&aspect=true" 
            title="Nike Air Force 1 '07 LV8" 
            category="Nike" 
            price="129.990"
            />
            <Card img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQRuR3ykr4mpxsYeyHSmD5vopsbPnNV8wskmR3lPd3VR3HEfJm7WjtYly8SPBRFBD45SyciNfoeu2LwEBr3007tXt9FAZaJY-5l87Bo1QbNnmID56Li1HYoA&usqp=CAE" 
            title="Jordan Stay Loyal 3" 
            category="Jordan" 
            price="122.990"
            />
            <Card img="https://nikeclprod.vtexassets.com/arquivos/ids/997507-800-800?v=638488867879170000&width=800&height=800&aspect=true" 
            title="Air-Jordan-1-Zoom-CMFT 2" 
            category="Jordan" 
            price="132.990"
            />
            <Card img="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/392326/03/sv01/fnd/CHL/w/1000/h/1000/fmt/png" 
            title="Puma Rebound" 
            category="Puma" 
            price="59.990"
            />
            <Card img="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/392290/02/sv01/fnd/CHL/w/1000/h/1000/fmt/png" 
            title="Puma Caven 2.0" 
            category="Puma" 
            price="54.990"
            />
            <Card img="https://coliseumstore.cl/media/catalog/product/5/f/5fm00795-014_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=408&width=408&canvas=408:408" 
            title="Fila Fast Charge" 
            category="Fila" 
            price="69.990"
            />
            <Card img="https://coliseumstore.cl/media/catalog/product/5/f/5fm00002-125_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=408&width=408&canvas=408:408" 
            title="Fila Disruptor II Premium" 
            category="Fila" 
            price="69.990"
            />
            <Card img="https://nikeclprod.vtexassets.com/arquivos/ids/999066-800-800?v=638488896219970000&width=800&height=800&aspect=true" 
            title="Jordan Spizike Low" 
            category="Jordan" 
            price="169.990"
            />
            <Card img="https://i.ebayimg.com/images/g/u20AAOSwYFBjmfqi/s-l500.jpg" 
            title="Zapatillas Rojas Air Jordan 11" 
            category="Jordan" 
            price="581.810"
            />
            <Card img="https://coliseumstore.cl/media/catalog/product/1/f/1fm01752-602_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=408&width=408&canvas=408:408" 
            title="Fila Vulc 13 2d" 
            category="Fila" 
            price="32.990"
            />
          </div>
        </div>
      </main>
      <div className=" bg-[#cfdbff]"> 
      <Footer />
      </div>
    </div>
  );
}

export default App
