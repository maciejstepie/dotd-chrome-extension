import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

export function RaidTableMisc(props) {
  const raid = props.raid;
  return (
    <Table size="small" aria-label="a dense table" className="my-2">
      <TableHead>
        <TableRow>
          <TableCell>Rarity</TableCell>
          <TableCell align="center">Resources</TableCell>
          <TableCell align="right">Stat Swap</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell scope="row">{raid.rarity || "?"}</TableCell>
          <TableCell align="center">
            {raid.resources
              ? raid.resources.map(keys => (
                  <div key={keys} className={`Resources ${keys}`}>
                    {" "}
                    {keys}{" "}
                  </div>
                ))
              : "?"}
          </TableCell>
          <TableCell align="right">
            {raid.statSwap
              ? raid.statSwap.map((key,i) => (
                  <div className={`Stat ${key.stat}`} key={i}>
                    {" "}
                    {`${key.stat}: x${key.value}`}
                  </div>
                ))
              : "Normal"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
