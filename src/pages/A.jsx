import React from 'react'
import {Table} from 'reactstrap'

const A = () => {
  return (
    <div>
      <Table bordered>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope='row'>
            1
          </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default A
