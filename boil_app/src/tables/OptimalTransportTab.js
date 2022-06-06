import React from 'react'

export default function OptimalTransportTab() {
  return (
    <div className="w-50 p-3">
      <h3>Optimal Transport</h3>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Recipient_1</th>
                <th scope="col">Recipient_2</th>
                <th scope="col">Recipient_3</th>
                <th scope="col">Fictional</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Supplier_1:</th>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
            </tr>
            <tr>
                <th scope="row">Supplier_2:</th>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
            </tr>
            <tr>
                <th scope="row">Supplier_3:</th>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
            </tr>
            <tr>
                <th scope="row">Fictional:</th>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
                <td><text className="optimalTransport border-0" type="text" /></td>
            </tr>
            </tbody>
            
        </table>
        </div>
  )
}
