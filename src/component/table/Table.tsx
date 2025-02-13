import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from "@mui/material";
import { Row, TableComponentProps } from "./interface";
import "./table.sass";


const TableComponent: React.FC<TableComponentProps> = ({ columns, rows, showCheckbox = false }) => {
  return (
    <TableContainer className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            {showCheckbox && <TableCell className="checkbox-cell"><Checkbox /></TableCell>}
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align || "left"} className="table-header">
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {showCheckbox && <TableCell className="checkbox-cell"><Checkbox /></TableCell>}
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || "left"} className="table-cell">
                  {row[column.id as keyof Row]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;