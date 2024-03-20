import React from 'react';
import { useSelector } from 'react-redux';

const Additems = () => {
  const list = useSelector((state) => state.list);
  // console.log(list)
  return (

    <>
    <p>List</p>
    </>
  )
}

export default Additems;