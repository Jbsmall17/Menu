import React,{ useState } from 'react'
import Catergories from './Catergories'
import './index.css'
import Menu from './Menu'
import data from './data'

let allcatergories = ['all',...new Set(data.map(food => food.category))]
function App() {
  const [items,setitems] = useState(data)
  const [categories, setCatergories] = useState(allcatergories)

  const filterItems = (word) =>{
    if (word === 'all'){
      setitems(data)
      return
    }
    const newItems = data.filter(food=>food.category === word)
    setitems(newItems)
  }
  return (
    <main>
      <section className="menu container">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Catergories category={categories} filter={filterItems}/>
        <Menu menuItems={items}/>
      </section>
    </main>
  )
}

export default App
