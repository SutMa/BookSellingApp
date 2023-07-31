import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'




const Books = ()=> {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    const fetchAllBooks = async() =>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllBooks()
  },[])

  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map(books=>{
          <div className="book">
            {<img src="" alt="" />}
          </div> 
        })}
      </div>
    </div>
  )
}

export default Books

