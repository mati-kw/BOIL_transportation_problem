import React from 'react'

export default function OptimalTransportTab({props}) {
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
                <td><text className="optimalTransport border-0" type="text" />{props[0][0]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[0][1]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[0][2]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[0][3]}</td>
            </tr>
            <tr>
                <th scope="row">Supplier_2:</th>
                <td><text className="optimalTransport border-0" type="text" />{props[1][0]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[1][1]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[1][2]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[1][3]}</td>
            </tr>
            <tr>
                <th scope="row">Supplier_3:</th>
                <td><text className="optimalTransport border-0" type="text" />{props[2][0]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[2][1]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[2][2]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[2][3]}</td>
            </tr>
            <tr>
                <th scope="row">Fictional:</th>
                <td><text className="optimalTransport border-0" type="text" />{props[3][0]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[3][1]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[3][2]}</td>
                <td><text className="optimalTransport border-0" type="text" />{props[3][3]}</td>
            </tr>
            </tbody>
            
        </table>
        </div>
  )
}
