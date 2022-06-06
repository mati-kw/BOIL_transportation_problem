import React from 'react'

export default function recipientTab() {
  return (
    <div class="w-25 p-3">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Recipient 1</th>
            <th scope="col">Recipient 2</th>
            <th scope="col">Recipient 3</th>
          </tr>
        </thead>
          <tr>
              <th scope="row">Demand:</th>
              <td><input class="demand border-0 " type="number" placeholder="0"/></td>
              <td><input class="demand border-0" type="number" placeholder="0"/></td>
              <td><input class="demand border-0" type="number" placeholder="0"/></td>
          </tr>
          <tr>
              <th scope="row">Selling price:</th>
              <td><input class="sellingPrice border-0" type="number" placeholder="0"/></td>
              <td><input class="sellingPrice border-0" type="number" placeholder="0"/></td>
              <td><input class="sellingPrice border-0" type="number" placeholder="0"/></td>
          </tr>
      </table>
    </div>
    
  )
}
