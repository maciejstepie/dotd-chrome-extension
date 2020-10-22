import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

export function RaidTableInfo(props) {
const raid = props.raid;
  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell align="right">Magics</TableCell>
          <TableCell align="right">Timer</TableCell>
          <TableCell align="right">Cooldown</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={raid.name}>
          <TableCell scope="row">{raid.type.map((el)=> el.value).join(", ") || "?"}</TableCell>
          <TableCell align="right">{raid.magics || "?"}</TableCell>
          <TableCell align="right">{raid.timer || "?"}</TableCell>
          <TableCell align="right">{raid.cooldown || "?"}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
