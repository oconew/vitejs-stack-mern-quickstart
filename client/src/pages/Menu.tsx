import Slider from '../components/Slider'
import ProductGrid from '../components/ProductGrid'

import '../styles/Navbar.css'
import '../styles/index.css'
import '../styles/Menu.css'

import { useParams } from 'react-router-dom'

function Menu() {
  const { type } = useParams()
  if (type == 'food' || type == 'drink') {
    return (
      // <div className="flex">
      <>
        {/* <Navbar /> */}
        <Slider type={type} />
        <script src="/src/scripts/burger.js"></script>
      </>
      // </div>
    )
  } else {
    return (
      <>
        <ProductGrid category={type}></ProductGrid>
      </>
    )
  }
}

export default Menu
