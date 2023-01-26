import logo from './logo.svg';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Card from './components/Card';
import { useState } from 'react';


const precos = [
  {item: "Cadeira Gamer", brand: "Tok&Stok", preco: 1000, promocao: 500, imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxracer.com.br%2Fcbf%2Fcadeira-gamer-maxracer-tactical-cbf-azul-branca&psig=AOvVaw072EU7r7CsT3dGv0PzRpr2&ust=1674861187698000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJijkKOu5vwCFQAAAAAdAAAAABAJ"},
  {item: "Mesa", brand: "Tok&Stok", preco: 2500, promocao: 1500, imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.schumann.com.br%2Fconjunto-mesa-de-jantar-madetal-valencia-com-4-cadeiras-texas-136x90cm-cabernet-preto-ebano-p1130958&psig=AOvVaw2vXvPilDg7joYTqH5NH3Ji&ust=1674861291796000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjy0tSu5vwCFQAAAAAdAAAAABAL" },
  {item: "Caneta", brand: "Mon'blanc", preco: 10000, promocao: 6500, imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.montblanc.com.br%2Frollerball-meisterstuck-classique-revestida-a-platina-2865%2Fp&psig=AOvVaw1db8oQlVwVArWcfe5AKD3L&ust=1674861259515000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICKssWu5vwCFQAAAAAdAAAAABAF"},
]
function App() {

  const [itens, setItens] = useState(precos)
  console.log(itens)

  return (
    <ChakraProvider >
    {itens.map((cards) => {
      return(
        <Card
        cards={cards}
        />
      )
    })}
      
    </ChakraProvider>
  );
}

export default App;
