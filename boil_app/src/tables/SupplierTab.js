import React from 'react'

export default function supplierTab() {
  return (
    <div className="w-50 p-3">
      <h3>Suppliers</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Supplier_1</th>
            <th scope="col">Supplier_2</th>
            <th scope="col">Supplier_3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
                <th scope="row">Supply:</th>
                <td><input className="supply border-0" type="number" placeholder="0"/></td>
                <td><input className="supply border-0" type="number" placeholder="0"/></td>
                <td><input className="supply border-0" type="number" placeholder="0"/></td>
            </tr>
            <tr>
                <th scope="row">Purchase_cost:</th>
                <td><input className="purchaseCost border-0" type="number" placeholder="0"/></td>
                <td><input className="purchaseCost border-0" type="number" placeholder="0"/></td>
                <td><input className="purchaseCost border-0" type="number" placeholder="0"/></td>
          </tr>
        </tbody>
          
      </table>
    </div>
  )
}
