
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import PriceOPtions from './Components/PriceOptions/PriceOPtions'
import Recharts from './Components/ReCharts/Recharts'

function App() {

  return (
    <div className='p-5'>
      <Navigation></Navigation>
      <PriceOPtions></PriceOPtions>
      <Recharts></Recharts>
    </div>
  )
}

export default App
