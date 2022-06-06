import React from 'react'

export default function recipientTab() {
  return (
    <div className="w-50 p-3">
      <h3>Recipients</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Recipient_1</th>
            <th scope="col">Recipient_2</th>
            <th scope="col">Recipient_3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
                <th scope="row">Demand:</th>
                <td><input className="demand border-0 " type="number" placeholder="0"/></td>
                <td><input className="demand border-0" type="number" placeholder="0"/></td>
                <td><input className="demand border-0" type="number" placeholder="0"/></td>
            </tr>
            <tr>
                <th scope="row">Selling_price:</th>
                <td><input className="sellingPrice border-0" type="number" placeholder="0"/></td>
                <td><input className="sellingPrice border-0" type="number" placeholder="0"/></td>
                <td><input className="sellingPrice border-0" type="number" placeholder="0"/></td>
          </tr>
        </tbody>
          
      </table>
    </div>
    
  )
}
