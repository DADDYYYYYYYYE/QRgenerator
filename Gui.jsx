const arrayss= [

  {
    name:'prasanth',
    city:'chenai',
    skills:['javca','jsjh','lkdj'],
    online:'true',
    image:'images.jpg'

  },
  {
    name:'prth',
    city:'chenai',
    skills:['javca','jsjh','lkdj']
    ,
    online:'false',
    image:'junkimag.jpg'

  },
  


]



function Gh(props)
{
  return (
  <>

    <div className="user">
    <span className={props.online?"propsonline":"propsoffline"}>{props.online?"ONLINE":"OFFLINE"}</span>
      <img src={props.image} className="img"></img>
      
      <h2 className="name">{props.name}</h2>
      <h3 className="city">{props.city}</h3>
      <div className="button">
        <button className="btn1">Message</button>
        <button className="btn2">Follow</button>

      </div>
      <div>
        <h6>Skill</h6>
        <ul>
         {
          props.skills.map((skill,index)=>
            <li>{skill}</li>
        )
         }
        </ul>

      </div>
    </div>
  
  </>
  )
}





export const Gui = () => {
  return (
    <>
   {
      arrayss.map((user,index)=>
        <Gh key="index"  name={user.name} city={user.city}
      skills={user.skills} online={user.online} 
      image={user.image}
      />
    )
   }

    </>
  );
};
