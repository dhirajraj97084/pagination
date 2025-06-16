import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PAZE_SIZE=10;

function App() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProduct=async()=>{
    try {
      const res=await axios.get('https://dummyjson.com/products?limit=250');
      console.log(res.data.products);     
      setProduct(res.data.products);
    } catch (error) {
      console.log("server error",error);
    }
  }
  useEffect(()=>{
   fetchProduct();
  },[])

  const totalProduct=product.length;
  const noOfPages=Math.ceil(totalProduct/PAZE_SIZE);
  const start=currentPage*PAZE_SIZE;
  const end=start+PAZE_SIZE;
  
  const handlechange=(n)=>{
    setCurrentPage(n);
  }
  const goToNext=()=>{
     setCurrentPage((prev)=>prev+1);
  }
  const goToprev=()=>{
    setCurrentPage((prev)=>prev-1)
  }

  return (
    <div className='bg-blue-50'>
      <h1 className='text-3xl text-green-600 font-bold flex justify-center pt-8'>Pagiantion</h1>
      <h1 className='text-2xl font-semibold py-10'>Total Products avialable in my Store is : {product.length}</h1>
      {/* pagination ui */}      
      <div className="div pb-5 flex justify-center">
        <button disabled={currentPage===0} onClick={goToprev} className='p-1 border m-1 border-black  cursor-pointer'>◀</button>
         {[...Array(noOfPages).keys()].map((n)=>(
          <button onClick={()=>handlechange(n)} className={`p-1 px-3 border m-1 border-black cursor-pointer rounded 
              ${currentPage === n ? "bg-blue-500 text-white" : "bg-white text-black"}`} key={n}>{n}</button>
         ))}
         <button disabled={currentPage===noOfPages-1} onClick={goToNext} className='p-1 cursor-pointer border m-1 border-black '> ▶</button>
      </div>
      <div className="main flex flex-wrap px-8 justify-center gap-4">
        {product.slice(start,end).map((item,index)=>(
          <div key={index} className="div w-32 md:w-56 bg-white shadow-xl border-2 border-black">
             <img src={item.thumbnail} alt={item.title} />
             <h1 className='flex justify-center pb-3'>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
