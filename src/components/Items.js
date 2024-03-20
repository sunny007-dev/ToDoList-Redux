import React, { useState } from 'react'
import { addItems, deleteItems } from '../state/action-creators';
import { useDispatch, useSelector } from 'react-redux';

const Items = ()=> {
  const mainStyle = {
    "height":"100vh",
    "width": "100%",
    "backgroundColor": "#9b5b5b",
    "display": "flex",
    "alignItems": "start",
    "justifyContent": "center",
    "paddingTop": "100px"
  }

  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);

  return (
    <>
      <div className="main-page" style={mainStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4">
              <figure>
                <figcaption style={{color:'#fff',textAlign:'center'}}>Add Your List here</figcaption>
              </figure>
              <div className="input-group mb-3">
                <input type="text" id="addItemsId" value={inputData} onChange={(event) => setInputData(event.target.value)} className="form-control" placeholder="Add items here..."/>
                <button className="btn btn-primary" type="button" id="addItemsId" onClick={() => dispatch(addItems(inputData),setInputData(''))}>Add Items</button>
              </div>
            </div>
            <div className="col-xl-12">
                {list.map((elem) => {
                  <ul>
                    <li>{elem.data}</li>
                  </ul>
                  })
                }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items