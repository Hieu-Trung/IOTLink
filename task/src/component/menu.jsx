import React from 'react'
import Box from '@mui/material/Box';
import logo from '../image/logo.png';
import Shape from '../image/shape.png';
import Group3 from '../image/Group3.png';
import List from '../image/list.png';
import Setting from '../image/setting.png';
import Send from '../image/send.png';
import File from '../image/file.png'
import { Button } from '@mui/material';
const menu = () => {
    return (
        <Box sx={{ height: '100%', width: '100px', backgroundColor: '#FBFAFF', }}>
            <Box sx={{ width: '100%', height: '150px', display: 'flex', flexDirection: 'column' }}>
                <img src={logo} height={35} width={30} style={{ marginTop: '5px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                <p style={{ marginTop: '0', color: '#23235F', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '13px', lineHeight: '21px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>OCTOM.</p>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button sx={{ padding: '15px' }}>
                    <img src={Shape} height={20} width={20} />
                </Button>
                <Button sx={{ padding: '15px' }}>
                    <img src={Group3} height={20} width={20} />
                </Button>
                <Button sx={{ backgroundColor: '#5051F9', padding: '15px' }}>
                    <img src={List} height={20} width={20} />
                </Button>
                <Button sx={{ padding: '15px' }}>
                    <img src={Setting} height={20} width={20} />
                </Button>
                <Button sx={{ padding: '15px' }}>
                    <img src={Send} height={20} width={20} />
                </Button>
                <Button sx={{ padding: '15px' }}>
                    <img src={File} height={20} width={20} />
                </Button>
            </Box>

        </Box>
    )
}

export default menu