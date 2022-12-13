import React from 'react'
import Box from '@mui/material/Box';
import Search from '../image/search.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import avata from '../image/avata.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupChat from './groupChat';
import Task from './task';
import { Button } from '@mui/material';
const appBar = () => {
    return (
        <Box sx={{ height: '100vh', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: '70px', width: '100%', backgroundColor: '#FFFFFF', display: 'flex', flex: '1 0 0px' }}>
                <Box sx={{ display: 'flex', flexBasis: '100px' }}></Box>
                <Box sx={{ flexGrow: '1', display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                    <Box sx={{ backgroundColor: '#F3F7FA', height: '50%', width: '200px', display: 'flex', alignItems: ' center' }}>
                        <input style={{ border: 'none', backgroundColor: '#F3F7FA', }} placeholder='Search anything...' />
                        <img src={Search} height={20} width={20} />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexBasis: '100px', justifyContent: 'flex-end', height: '100%', alignItems: 'center', right: '5px' }}>
                    <Button>
                        <Badge badgeContent={2} color="primary">
                            <NotificationsNoneIcon sx={{ color: '#768396', }} />
                        </Badge>
                    </Button>
                    <Button>
                        <Avatar src={avata} sx={{ marginLeft: '20px' }} />
                        <ExpandMoreIcon sx={{ color: '#5250F9' }} />
                    </Button>
                </Box>
            </Box>
            <Box sx={{ height: '90%', backgroundColor: '#F3F4F8', display: 'flex', justifyContent: 'space-between' }}>
                <Task />
                <GroupChat />
            </Box>
        </Box>
    )
}

export default appBar