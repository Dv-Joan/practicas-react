function PrideRow({ row, index, style }) {
  const { editRow, deletePride } = row;

  return (
    <tr key={index} style={style}>
      <td className="font-Cedarville font-bold pr-16 pl-7">{row.name}</td>
      <td>{row.description}</td>
      <td className="pl-16 pr-7">
        <button
          onClick={() => {
            editRow(row);
          }}
          className="m-2 text-sm px-5 rounded-lg py-0.5 border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none hover:ring-2 hover:ring-cyan-600 active:bg-cyan-600"
        >
          Edit
        </button>
        <button
          onClick={() => deletePride(row.id)}
          className="m-2 text-sm px-5 rounded-lg py-0.5 border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none hover:ring-2 hover:ring-cyan-600 active:bg-cyan-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default PrideRow;
