import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function Gallery() {
    return (
        <div id="galleryDiv">
			<h1 id="galleryGreeting">Gallery</h1>
			<br />
            <Stack spacing={2}>
                <Pagination count={10} />
            </Stack>
        </div>
    )
}