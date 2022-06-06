import React from 'react'

export default function supplierTab() {
  return (
    <div class="w-25 p-3">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Supplier 1</th>
            <th scope="col">Supplier 2</th>
            <th scope="col">Supplier 3</th>
          </tr>
        </thead>
          <tr>
              <th scope="row">Supply:</th>
              <td><input class="supply border-0" type="number" placeholder="0"/></td>
              <td><input class="supply border-0" type="number" placeholder="0"/></td>
              <td><input class="supply border-0" type="number" placeholder="0"/></td>
          </tr>
          <tr>
              <th scope="row">Purchase cost:</th>
              <td><input class="purchaseCost border-0" type="number" placeholder="0"/></td>
              <td><input class="purchaseCost border-0" type="number" placeholder="0"/></td>
              <td><input class="purchaseCost border-0" type="number" placeholder="0"/></td>
          </tr>
      </table>
    </div>
  )
}
