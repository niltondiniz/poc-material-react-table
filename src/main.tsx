
import { createRoot } from 'react-dom/client'
//import './index.css'
import MaterialTable from '../material-table'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <CssBaseline>
    <MaterialTable />
  </CssBaseline>
    
)
