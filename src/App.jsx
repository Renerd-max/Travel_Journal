import React from 'react'
import './App.css'
import Header from "./Header"
import MyData from './Data'
import Journal from './Card'

export default function App() {
  const JournalCards = MyData.map(data => {
    return (
        <Journal 
        {...data}
        />
    )
})

  return (
    <>
    <Header />
    <div id="main">
    {JournalCards}
    </div>
    </>
  )
}