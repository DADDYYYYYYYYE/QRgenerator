import React, { useState } from 'react'

export const Mine = () => {

  const[img,setimg] = useState("")
  const[loading,notloading] = useState(false)
  const[qrdata,setqrdata] = useState("")
  const[size,setsize] = useState("")
  function hey()
  {
    notloading(true)
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${qrdata}`;
      setimg(url);
    }
    catch(error)
    {

    }
    finally{
      notloading(false);
    }
  }



  return (
    <div className='mine'>
      {loading && <p>Loading....</p>}
      {img && <img src={img}></img>}
      <input type="text" className='input' placeholder="enter url" value={qrdata} onChange={
        (e)=>
        {
            setqrdata(e.target.value)
        }
      } ></input>
      <input type="text"className='input' placeholder='enter size' value={size} onChange={(e)=>
        {
          setsize(e.target.value)
        }
      }></input>
      <button className='butn' onClick={hey}>GenerateQRcode</button>
    </div>
  )
}
