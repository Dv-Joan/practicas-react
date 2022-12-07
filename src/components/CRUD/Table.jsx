import PrideRow from "./Row";
function PrideTable({ prides, editRow, deletePride }) {
  return (
    <div className="flex justify-center">
      <table className=" overflow-auto sm:rounded-xl mb-16 text-left drop-shadow-xl bg-neutral-300 ">
        <thead className="uppercase">
          <tr>
            <th scope="col" className="py-3 pl-10">
              Name
            </th>
            <th scope="col" className="py-3 pl-3">
              Description
            </th>
            <th scope="col" className=" text-center py-3 pl-12">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {prides.map((pride, index) => (
            <PrideRow
              key={index}
              row={pride}
              index={index}
              editRow={editRow}
              deletePride={deletePride}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrideTable;
