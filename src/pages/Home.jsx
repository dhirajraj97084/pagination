import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Layout from '../component/Layout'
import axios from 'axios';

const PAZE_SIZE=4;

function Home() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const getProduct=async()=>{
    const res=await axios.get('https://fakestoreapi.com/products');
    console.log(res.data);
    setProduct(res.data);
  }
  useEffect(()=>{
     getProduct();
  },[])


  const totalItems=product.length;
  const NoOfPages=Math.ceil(totalItems/PAZE_SIZE);
  const start=currentPage*PAZE_SIZE;
  const end=start+PAZE_SIZE;
  
  const changeHandle=(n)=>{
    setCurrentPage(n);
  }
  const goToNext=()=>{
    setCurrentPage((prev)=>prev+1);
  }
  const goToPrev=()=>{
    setCurrentPage((prev)=>prev-1);
  }

  return (
    <Layout>
      <div className='bg-gray-50'>
      <div className="  pt-6 flex flex-wrap justify-center items-center">
         {product.slice(start,end).map((item,index)=>(
          <div key={index} className="div border-2 border-black bg-white shadow-xl p-4 m-4  ">
             <img className='h-52 mx-auto' src={item.image} alt={item.category} />
             <h1>{item.category} </h1>
             <h1>{item.price}</h1>
          </div>
         ))}
         
      </div>
      <div className="pagination flex justify-center pb-10">
          <button disabled={currentPage===0} onClick={goToPrev} className='m-2 p-2 border-2 border-black rounded-full'>◀</button>
          {[...Array(NoOfPages).keys()].map((n)=>(
           <button onClick={()=>changeHandle(n)} key={n} className={`m-2 p-2  border-2 text-black border-black rounded-full ${currentPage===n?"bg-blue-600 text-white":""}`}>{n}</button>           
          ))}
          <button disabled={currentPage===NoOfPages-1} onClick={goToNext} className='m-2 p-2 border-2 border-black rounded-full'>▶</button>
         </div>
      </div>
    </Layout>
  )
}

export default Home
