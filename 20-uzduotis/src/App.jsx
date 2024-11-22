
import './App.css'
import data from './data/data.json'
import Header from './components/Header'
import Card from './components/Card'
function App() {
 

  return (
    <>
     <Header/> 
     
     {data.map((info) =>  <Card
      key={info.id}
      company={info.company}
      position={info.position}
      postedAt={info.postedAt}
      contract={info.contract}
      location={info.location}
      logo={info.logo}
      
     />)}
    
    </>
  )
}

export default App
