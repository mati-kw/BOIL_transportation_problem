import React, { Component } from 'react'

export default function TransportCostTab(){
    return (
        <div className="w-50 p-3">
            <h3>Transport costs</h3>
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
                <th scope="row">Supplier_1:</th>
                <td><input className="transportCost border-0 " type="number" placeholder="0"/></td>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
            </tr>
            <tr>
                <th scope="row">Supplier_2:</th>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
            </tr>
            <tr>
                <th scope="row">Supplier_3:</th>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
                <td><input className="transportCost border-0" type="number" placeholder="0"/></td>
            </tr>
            </tbody>
            
        </table>
        </div>
    )
}
