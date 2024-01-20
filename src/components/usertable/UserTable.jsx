import { Table } from 'react-bootstrap';
import React, { useState } from 'react';

function UserTable() {
  const [tableData, setTableData] = useState([
    // Your table data here
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Define a function to handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the table data based on the search query
  const filteredData = tableData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filtetableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 35 }
  ]


  return (
    <div className='mt-4'>
      <div className='mb-4'>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className='form-control w-25 mx-auto'
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Id</td>
            <th>Name</th>
            <th>Age</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;