import Table from 'react-bootstrap/Table';
import jsonData from '../json/constant';

function TabledataUser() {

    const filtetableData = jsonData.filtetableData;
    return (
        <>
            <h2 className="text-center mt-3 mb-5">Multiple</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {filtetableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            {/* Add more table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default TabledataUser; 