import './App.css'
import All_head from './components/Allhead'
import BannerSlider from './components/banner part/Banner'
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

    <All_head head={"hello"} h1={"flash sales 2"}/>
    </>
  )
}

export default App
