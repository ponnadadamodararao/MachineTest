import React from 'react';
import './style.css';
import ViewBill from './ViewBill.js';
import { useState } from 'react';
export default function App() {
  const [viewstatus, setViewstatus] = useState(false);
  return (
    <div>
      <table>
        <tr>
          <td>
            <center>
              <button className="btn" onClick={() => setViewstatus(true)}>
                View Bill
              </button>
            </center>
          </td>
        </tr>
        {viewstatus == true ? <ViewBill /> : null}
      </table>
    </div>
  );
}
