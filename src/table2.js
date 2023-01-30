import * as React from 'react';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import DataJson from "./objects.json"


export default function DataTable() {
let [filters, setFilters] = React.useState({}) 
let [turnFilters, setTurnFilters] = React.useState(false)
    let columns1 = Object.keys(DataJson[0]).map((key)=>{
        return {field:key, headerName:key, editable: false, width:220, headerClassName: 'super-app-theme--header'}
      })

  function createFilter(event){
    setFilters((oldValue)=>{return ({...oldValue, [event.target.name]:event.target.value})})
  }

  function turnFiltersFun(){
    setTurnFilters(oldValue=>!oldValue)
  }
   
  
let map_obj = DataJson.filter((obj)=>{
  let flag = 0
      for (let keys of Object.keys(obj)){
        for(let key of Object.keys(filters)){
          if(keys === key){
            if( obj[keys].toLowerCase().includes(filters[key].toLowerCase())){
                  flag = flag + 1  }
                }
            }
        }
    if(flag === Object.keys(filters).length){return obj}})     

console.log(map_obj)

  return (
    <>
    
    <div className='inputs'>
    <input name="Username" type="text" placeholder="Username" onChange={createFilter} />
    <input name=" Identifier" type="text" placeholder="Identifier" onChange={createFilter} />
    <input name="Last name" type="text" placeholder="last Name" onChange={createFilter}/>
    <input type="text" />
    <input type="text" />
    <button onClick={turnFiltersFun}>Ok</button>
    </div>
    <div style={{ height: 600, width: '100%' }} className="Table2">
      <DataGrid
      sx={{
        boxShadow: 2,
        border: 2,
        fontWeight: 400,
        borderColor: 'black',
        '& .super-app-theme--header': {
            fontWeight: 1200
          },
      }}
        getRowId={(row)=>row[" Identifier"]}
        columns={columns1}
        rows={turnFilters?map_obj:DataJson}
        pageSize={10}
        components={{ Toolbar: GridToolbar }}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    </>
  );
}

//{turnFilters? filters:DataJson}