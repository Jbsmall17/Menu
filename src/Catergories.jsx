import React from 'react'

export default function Catergories({category,filter}) {
  return (
    <div className="btn-container">
      {
        category.map((cate,index)=>{
          return <button key={index} type="button" className="filter-btn" onClick={()=>filter(cate)}>{cate}</button>
        })
      }
    </div>
  )
}
