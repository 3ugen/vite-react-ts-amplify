import React from 'react'
import Typography from '@mui/material/Typography'


type props = {
    children: React.ReactNode
}

const IndexOutlet = () => {
    return (
        <Typography>Index page</Typography>
    )
}

export const Index = () => {
   return <IndexOutlet/>
}
