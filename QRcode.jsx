import React, { useState } from 'react'

export const QRcode = () => {

    const[img,setimg] = useState("");
    const[loading,notloading] = useState(false);
    const[qrdata,setqrdata] = useState("");
    const[size,setsize] = useState("")

    function hello()
    {
        notloading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrdata)}`;
            setimg(url)
        }
        catch(error)
        {

        }
        finally{
            notloading(false)
        }

    }
  return (
    <>
    <div className="qrcode">

       {loading && <p>Loading Please Wait..</p>}
       {img && <img src={img} className='img'/>}
        <input type='text' placeholder='Enter url' className='text' value={qrdata} onChange={
            (e)=>{setqrdata(e.target.value)}
        }></input>
        <input type='text' placeholder='size'className='text' value={size} onChange={(e)=>
            {
                setsize(e.target.value)

            }
        }></input>

    <button className='btn' onClick={hello}>Generate QR Code</button>
   
    </div>
    </>
  )
}

