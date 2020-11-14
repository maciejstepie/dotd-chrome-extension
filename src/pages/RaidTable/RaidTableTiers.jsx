import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import { ShowFormatedHpDMg } from "../../Raids/Raids";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

function MaxTier(tiers) {
  let l = tiers && tiers.length ? tiers.length : null;
  let x;

  if (l >= 1) x = tiers[l - 1].Damage;

  return ShowFormatedHpDMg(x); //JSON.stringify(l)
}

function TabContent(tier, maxPlayers, OptimalShare) {
  const fairShare = tier.maxHp && maxPlayers ? tier.maxHp / maxPlayers : null;

  return (
    <>
      <Table size="small" aria-label="tier table misc">
        <TableHead>
          <TableRow>
            <TableCell>Max HP</TableCell>
            <TableCell align="right">Fair Share</TableCell>
            <TableCell align="center">Optimal Share</TableCell>
            <TableCell align="right">Max Tier</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{ShowFormatedHpDMg(tier.maxHp)}</TableCell>
            <TableCell align="right">{ShowFormatedHpDMg(fairShare)}</TableCell>
            <TableCell align="center">
              {ShowFormatedHpDMg(OptimalShare)}
            </TableCell>
            <TableCell align="right">{MaxTier(tier.tier)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );

  /*   <Table size="small" aria-label="tier table">
    <TableHead>
      <TableRow>
        <TableCell>Art</TableCell>
        <TableCell align="right">Name</TableCell>
        <TableCell align="center">Size</TableCell>
        <TableCell align="right">Type</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map(row => (
        <TableRow
          key={row.name}
          className={`Size Background ${row.size} HighLightRow `}
          onClick={() => {
            ClickRaid(row.name);
          }}
        >
          <TableCell scope="row">
            <Avatar
              alt={row.name}
              src={LinkToArt("Essence", row.size, row.art_essence)}
            />
          </TableCell>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right">{row.size}</TableCell>
          <TableCell align="right">{row.type.join(", ")}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table> */
}

export function RaidTableTiers(props) {
  const raidTiers = props.raid.tiers || [];
  const { maxPlayers, OptimalShare } = props.raid || "?";
  return (
    <Tabs
      defaultActiveKey={
        props.raid.size === "Personal" ? "Personal" : "Legendary"
      }
      className="m-2"
    >
      {raidTiers.map((key, i) => (
        <Tab
          key={key.difficulty}
          title={key.difficulty}
          tabClassName={`Difficulty ${key.difficulty} mr-3`}
          eventKey={key.difficulty}
        >
          <div className="line-separator my-2"></div>
          {TabContent(key, maxPlayers, OptimalShare)}
        </Tab>
      ))}
    </Tabs>
  );
}
