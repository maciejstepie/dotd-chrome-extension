import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
              ? raid.resources.map((key) => (
                  <div key={key} className={`Resources ${key}`}>
                    {key}
                  </div>
                ))
              : "?"}
          </TableCell>
          <TableCell align="right">
            {raid.statSwap
              ? Object.keys(raid.statSwap).map((key) => (
                  <div className={`Stat ${key}`} key={key}>
                    {`${key}: x${raid.statSwap[key]}`}
                  </div>
                ))
              : "Normal"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
