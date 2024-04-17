import React from 'react';
import './AllProduct.css'
import { TProduct } from '@/types';

const Page = async() => {
  const res = await fetch('https://techzon-server.vercel.app/api/v1/products',{
    next:{
      revalidate: 30
    }
  })
  const products = await res.json();

  return (
    <div className="table-container">
      <table className="attendanceInputTable">
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Review</th>
            <th>Categories</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map((data: TProduct, i: number) => (
            <tr className={i % 2 === 0 ? "even-row" : "odd-row"} key={data._id}>
              <td>{i+1}</td>
              <td>{data.name}</td>
              <td>{data.review}</td>
              <td>{data.categories}</td>
              <td>{data.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
