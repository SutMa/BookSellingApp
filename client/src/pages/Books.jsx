import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




const Books = ()=> {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    const fetchAllBooks = async() =>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
        console.log(res.data)
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
        {books.map(book=>(
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete">Delete</button>
            <button className="update">Update</button>
          </div> 
        ))}
      </div>
      <button>
        <Link to={'./add'}>
        Add New Book
        </Link>
      </button>


    </div>
  )
}

export default Books

