import React from 'react'

const Doctor = ({doctors}) => {
  return (

    <div class="docs">
{
    doctors.slice(0, 4).map((doctor)=>(    

              <div class="col">
   <img src={`http://localhost:5000/${doctor.img}`} alt={doctor.name} />
    <div class="mid first">
      <strong>dr.{doctor.name}</strong>
      <span>{doctor.department}</span>
    </div>
    <div class="bottom">
      <strong>phone: <span>{doctor.phoneNumber}</span></strong>
      <strong>phone: <span>658 222 127 964</span></strong>
    </div>
  </div>)
    
 
  
    )


}
</div>
 
  )
}

export default Doctor