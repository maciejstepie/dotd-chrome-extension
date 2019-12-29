import React from 'react';
import {useSelector} from 'react-redux';
//import TableContainer from '@material-ui/core/TableContainer';
import {GetAllRaids} from '../Raids/Raids';
import { Avatar, Table,TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
//&nbsp;

function Content(){

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

    return (
<>
    {/*selectedTypes && <span>{JSON.stringify(selectedTypes)}</span>*/}
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
          {rows.map(row => (
            <TableRow key={row.name} className={row.size}>
              <TableCell scope="row">
              <Avatar alt={row.name} src={row.art_essence}/>
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.type.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
                 </>   
                )
}

export default Content;
