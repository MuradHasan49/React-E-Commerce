import './App.css'
import BannerSlider from './components/banner part/Banner'
import BSDetails from './components/BestSellingProducts/BSDetails'
import CategoryDetails from './components/Category/CategoryDetails'
import Discount from './components/Discount/Discount'
import CardDetails from './components/Flash Sales/CardDetails'
import FlashHead from './components/Flash Sales/FlashHead'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
    <Discount/>
    <Navbar/>
    <BannerSlider/>
    <FlashHead/>
    <CardDetails/>
    <CategoryDetails/>
    <BSDetails/>
    </>
  )
}

export default App
