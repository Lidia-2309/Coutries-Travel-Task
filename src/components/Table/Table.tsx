import React, { useMemo } from "react";
import { useTable } from "react-table";
import { IUser } from "./Types";

interface Columns{
    Header: string,
    acessor: string
}

type Props = {
  columns:Columns[], 
  data: IUser[];
};

const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Street",
    accessor: "address.street",
  },
]; 

function Table(props: Props) {

  const data = useMemo(() => props.data, [props.data]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow} = useTable({ columns, data });

  return (
    <table className="table table-striped table-sm">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} scope="col">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;