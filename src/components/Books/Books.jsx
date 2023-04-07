import React from 'react';
import { useLoaderData,useNavigation } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {
    const dataBooks=useLoaderData();
    const booksData = dataBooks.books;
    const navigation=useNavigation()
    if(navigation.state==='loading'){
      return <LoadingSpinner/>
    }
    return (
       

        <div className='my-container'>
           <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
           {
                booksData.map(book=><BookCard book={book} key={book.isbn13}/>)
            }
           </div>
           
        </div>
    );
};

export default Books;