import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import axios from 'axios';

const PAZE_SIZE=4;

function Pagination2() {

    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const getProduct=async()=>{
        try {
           const res=await axios.get('https://fakestoreapi.com/products');
           console.log(res.data)
           setProduct(res.data); 
        } catch (error) {
           console.log(error); 
        }
    }
    useEffect(()=>{
     getProduct();
    },[])

    // PAGING LOGIN
    const totalProduct=product.length;
    const noOfPage=Math.ceil(totalProduct/PAZE_SIZE);
    const start=currentPage*PAZE_SIZE;
    const end=start+PAZE_SIZE;
   
    const handle_click=(n)=>{
        setCurrentPage(n);
    }

    const gotoprev=()=>{
         setCurrentPage((prev)=>prev-1);
    }
    const gotonext=()=>{
        setCurrentPage((prev)=>prev+1);
    }


  return (
    <Layout>
    <div className="div bg-gray-50">
         <h1 className='text-3xl text-green-600 font-bold flex justify-center py-8'>Pagiantion2</h1>

         <div className="main grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-6">
            {product.slice(start,end).map((item,index)=>(
                <div key={index} className="border-2 border-black p-2 m-2 bg-white shadow-xl">
                    <img className='w-32 h-32 mx-auto' src={item.image} alt={item.title} />
                    <h1>{item.category}</h1>
                    <h1>{item.title}</h1>
                    <h1>Rs. {item.price}</h1>
                </div>
            ))}            
         </div>
         {/* pagination */}
         <div className="div flex justify-center py-5">
            <button disabled={currentPage===0} onClick={gotoprev} className='p-2 m-1 border-2 border-black rounded-xl cursor-pointer'>◀</button>
            {[...Array(noOfPage).keys()].map((n)=>(
                <button onClick={()=>handle_click(n)} className={`p-2 m-1 border-2 border-black rounded-xl cursor-pointer ${currentPage===n?'bg-blue-700 text-white' :'bg-white text-base' }`} key={n}>{n}</button>
            ))}
            <button disabled={currentPage===noOfPage-1} onClick={gotonext} className='p-2 m-1 border-2 border-black rounded-xl cursor-pointer'>▶</button>
         </div>
    </div>
    </Layout>
  )
}

export default Pagination2
