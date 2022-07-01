import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { TPerson } from "./Context";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
];


type TRow = {
  people : TPerson[]
}

export function Row({
people
} : TRow) {  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={people}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}