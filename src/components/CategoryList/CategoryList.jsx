/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const CategoryList = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
  }, [])


  return (
    <div className='mb-10'>
        <h2 className="text-3xl text-[#1A1919] font-extrabold text-center mb-2">Job Category List</h2>
        <p className="text-xs text-[#757575] font-medium text-center mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                categories.map(category => (
                  <div key={category.id} className='bg-gradient-to-r from-[#f1f3ff] to-[#f5f1ff] p-8 rounded-md'>
                      <div className='bg-gradient-to-r from-[#e2e7ff] to-[#ebe2ff] w-12 h-12 mb-4 rounded-md flex justify-center items-center'>
                        <img src={category.logo} className='w-7'/>
                      </div>
                      <h2 className='font-extrabold text-base mb-1'>{category.category_name}</h2>
                      <p className='text-xs font-medium text-[#A3A3A3]'>{category.availability}</p>
                  </div>
                ))
            }
        </div>
    </div>
  )
}

export default CategoryList
