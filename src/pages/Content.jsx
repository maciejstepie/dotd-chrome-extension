import React from 'react';
//import TableContainer from '@material-ui/core/TableContainer';
import {GetAllRaids, LinkToArt} from '../Raids/Raids';
import { Avatar, Table,TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import  { OPEN_RAID_ACTION } from '../redux/actions';
import { useSelector, useDispatch} from 'react-redux';
//&nbsp;



function Content(){
    const dispatch = useDispatch();
    const selectedTypes = useSelector(state => state.searchReducer);

    const isTrue = (arr, arr2) =>{
        return arr.every(i => arr2.includes(i));
      }
    
    const filterRaids = () =>{

        let arr = selectedTypes || [];

        arr = arr.map(function(x){
            return x.value;
        });

        let filter = [];
        GetAllRaids.forEach(element => {
            

            if(isTrue(arr, element.type))
            filter.push(element);
        });
        
        return filter || [];
    }
    const rows = filterRaids();

    const ClickRaid = (raid) =>{
      dispatch(OPEN_RAID_ACTION(raid));
    }


    return (
<>
    {/*selectedTypes && <span>{JSON.stringify(selectedTypes)}</span>*/}
        <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >Art</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="center">Size</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} className={`Size Background ${row.size.value} HighLightRow `} onClick={() => {ClickRaid(row.name)}}>
              <TableCell scope="row">
              <Avatar alt={row.name} src={LinkToArt('Essence', row.size.value, row.art_essence)}/>
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.size.value}</TableCell>
              <TableCell align="right">{row.type.map((el)=> el.value).join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
                 </>   
                )
}

export default Content;
