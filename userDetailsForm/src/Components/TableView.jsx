export default function TableItem({ el, deleteData }) {
  return (
    <tr key={el.id}>
      <td>{el.name}</td>
      <td>{el.age}</td>
      <td>{el.address}</td>
      <td>{el.salary}</td>
      <td>{el.department}</td>
      <td>{el.isMarried ? "Married" : "Single"}</td>

      <td>
        <button onClick={() => deleteData(el)}>Delete</button>
      </td>
    </tr>
  );
}
