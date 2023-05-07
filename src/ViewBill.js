import React from 'react';
import items from './Items.js';
const ViewBill = () => {
  console.log(items);
  const listitems = items.map((item) => {
    return (
      <tr>
        <td>{item.s_no}</td>
        <td>{item.items}</td>
        <td>{item.price_per_unit}</td>
        <td>{item.Quantity}</td>
        <td>{item.Quantity * item.price_per_unit}</td>
      </tr>
    );
  });
  const totalPrice = items.reduce(getTotalPrice, 0);
  const totalQuantity = items.reduce(getTotalQuantity, 0);
  const totalbillPrice = items.reduce(getTotalBillPrice, 0);
  return (
    <div>
      <table>
        <tr>
          <th>S/N</th>
          <th>Items</th>
          <th>Price/unit</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {listitems}
        <tr>
          <td style={{ borderStyle: 'None' }}></td>
          <td style={{ borderStyle: 'None' }}></td>
          <td>
            <b>{totalPrice}</b>
          </td>
          <td>
            <b>{totalQuantity}</b>
          </td>
          <td>
            <b>{totalbillPrice}</b>
          </td>
        </tr>
      </table>
    </div>
  );
};
const getTotalQuantity = (total, num) => {
  return total + num.Quantity;
};

const getTotalPrice = (total, num) => {
  return total + num.price_per_unit;
};

const getTotalBillPrice = (total, num) => {
  return total + num.Quantity * num.price_per_unit;
};
export default ViewBill;
