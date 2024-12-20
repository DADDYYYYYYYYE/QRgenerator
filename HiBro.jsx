import React from 'react'

export const HiBro = (props) => {
  return (
   <div className="red">
    <table>
      <tr>
        <th>Name</th>
        <td>
        {props.name}
        </td>
      </tr>
      <tr>
        <th>Age</th>
        <td>
          {props.age}
        </td>
      </tr>
      <tr>
        <th>Married</th>
        <td>
            {props.married? "yes":"no"}
        </td>
      </tr>
    </table>
   </div>
  )
}

