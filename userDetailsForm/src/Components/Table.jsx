import TableItem from "./Table";

export default function Table({ users, deleteData }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Salary</th>
        <th>Department</th>
        <th>Marital Status</th>
        <th>Delete</th>
      </tr>
      {users.map((el) => (
        <TableItem el={el} deleteData={deleteData}></TableItem>
      ))}
    </table>
  );
}
