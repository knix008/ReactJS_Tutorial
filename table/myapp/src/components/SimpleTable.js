import { Table } from 'react-bootstrap';

function SimpleTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Victor</td>
          <td>53</td>
          <td>knix008@naver.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Peter</td>
          <td>15</td>
          <td>peter.example@naver.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Olivia</td>
          <td>23</td>
          <td>olivia.example@naver.com</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SimpleTable;