import React from 'react'

export default function ParametersTab() {
  return (
    <div className="w-50 p-3">
        <h3>Parameters values</h3>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Purchase_cost</th>
                <th scope="col">Transport_cost</th>
                <th scope="col">Total_cost</th>
                <th scope="col">Income</th>
                <th scope="col">Profit</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Value:</th>
                <td><text className="Purchase_cost border-0" type="text" /></td>
                <td><text className="Transport_cost border-0" type="text" /></td>
                <td><text className="Total_cost border-0" type="text" /></td>
                <td><text className="Income border-0" type="text" /></td>
                <td><text className="Profit border-0" type="text" /></td>
            </tr>
            </tbody>    
        </table>
    </div>
  )
}
