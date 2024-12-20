const userdata = [
    {

    name:"rajan",
    skills:["java","python"],
    online:true,

},
{
    name:"rajan",
    skills:["java","python"],
    online:false,

},
{
    name:"rajan",
    skills:["java","python"],
    online:false,
},
]

function User(props)
{
    return (
        <div className="cardcontainer">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src="{props.image}" className="img"></img>
            <h3>{props.name}</h3>
            <h5>Chennai</h5>
            <p>Front-end Dev</p>
            <div className="button">
                <button  className="btn1">
                    Message
                </button  >
                <button className="btn1">
                    Follow
                </button>
            </div>
            <div className="skills">
                <h6>Skill</h6>
                    <ul>
                      {
                      props.skills.map((skill,index)=>(
                       <li key={index}>{skill}</li>
                      ))
                      }
                    </ul>
            </div>

        </div>
    )

}


export const Usercard = () => {
  return (
    <>
    {
       userdata.map((user,index)=>(

        <User key="index" name={user.name} skills={user.skills} online={user.online}
         image={user.img}  />
       ))
    }
    </>
  )
}
