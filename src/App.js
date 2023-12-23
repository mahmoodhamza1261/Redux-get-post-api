import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAPIProducts, postAPIProducts } from './redux/slice'

export default function App() {
  useEffect(() => {
    dispatch(getAPIProducts())
  }, [])
  const [name, setName] = useState()
  const dispatch = useDispatch()



  function DISPATCH() {
    dispatch(getAPIProducts())
    dispatch(postAPIProducts(name))
    dispatch(getAPIProducts())
  }
  const data = useSelector((state) => state)
  console.log("state", data.products.payload)

  return (
    <div>

      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={() => DISPATCH()}>post</button>
      
      {
        data.products.payload && data.products.payload.map((i) =>
        <h4>{ i.name}</h4>
         )
      }

      { }
    </div>
  )
}
