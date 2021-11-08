import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const table:React.FC = ({ children }) => (
  <TableContainer component={Paper} sx={{ marginBottom: 5 }}>
    <Table sx={{ minWidth: 1000 }} size="small" aria-label="a dense table">
      {children}
    </Table>
  </TableContainer>
);

export default table;
