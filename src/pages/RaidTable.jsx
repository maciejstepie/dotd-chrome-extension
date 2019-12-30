import React from 'react';
import  { OPEN_RAID_ACTION } from '../redux/actions';
import { useSelector, useDispatch} from 'react-redux';
import {GetAllRaids, CalculateFairShare} from '../Raids/Raids';

import { Avatar, Table,TableBody, TableCell, TableHead, TableRow, Button, Grid, Paper } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';

function RaidTable() {

    const dispatch = useDispatch();

    const ClickBack = (raidRoute) =>{
        dispatch(OPEN_RAID_ACTION(raidRoute));
      }

      const raidName = useSelector(state => state.openRaidReducer);
      const raid = GetAllRaids.find(element => element.name === raidName)

  return (<>
<Button onClick={() => {ClickBack(null)}}>Back to main</Button>
<Row> 
<Col><img src={raid.art_small} alt={raid.name}/></Col>
    <Col><h3 className={raid.size}>{raid.name}</h3></Col>
</Row>
    
    
    <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >Art</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        </TableBody>
      </Table>
    
  <div>{JSON.stringify(raid)}</div>

  </>
  );
}

export default RaidTable;
