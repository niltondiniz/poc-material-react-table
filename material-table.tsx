import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Box, MenuItem, Select, TextField } from '@mui/material';

//example data type
type Person = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: string;
    city: string;
    state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Omaha',
        state: 'Nebraska',
    },
];

const MaterialTable = () => {
    //should be memoized or stable
    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
                Cell: ({ row }) => (
                    <TextField
                        value={row.original.name.firstName}
                        variant="outlined"
                        size="small"
                    />
                ),
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',                
                Cell: ({ row }) => (
                    <TextField
                        value={row.original.name.lastName}
                        variant="outlined"
                        size="small"
                    />
                )
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
                Cell: ({ row }) => (
                    <TextField
                        value={row.original.address}
                        variant="outlined"
                        size="small"
                    />
                ),
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
                Cell: ({ row }) => (
                    <Select value={row.original.city} sx={{width: 150}}>
                        <MenuItem value="Columbus">Columbus</MenuItem>
                        <MenuItem value="Omaha">Omaha</MenuItem>
                        <MenuItem value="Lincoln">Lincoln</MenuItem>
                        <MenuItem value="East Daphne">East Daphne</MenuItem>
                        <MenuItem value="South Linda">South Linda</MenuItem>                        
                    </Select>
                )
            },
            {
                accessorKey: 'state',
                header: 'State',
                Cell: ({ row }) => (
                    <Select value={row.original.state} sx={{width: 160}}>
                        <MenuItem value="Ohio">Ohio</MenuItem>
                        <MenuItem value="Nebraska">Nebraska</MenuItem>
                        <MenuItem value="Kentucky">Kentucky</MenuItem>
                        <MenuItem value="West Virginia">West Virginia</MenuItem>
                    </Select>
                )
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return (
        <Box sx={{ p: 2, m: 2 }}>
            <MaterialReactTable table={table} />
        </Box>
    );
};

export default MaterialTable;
