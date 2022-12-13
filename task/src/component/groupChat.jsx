import React from 'react'
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Green from '../image/green.png';
import Yellow from '../image/yellow.png';
import Check from '../image/check.png';
import Voice from '../image/voice.png';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import avata1 from '../image/avata1.png';
import avata2 from '../image/avata2.png';
import avata3 from '../image/avata3.png';
import avata4 from '../image/avata4.png';
import avata5 from '../image/avata5.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Button } from '@mui/material';
const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 10,
    height: 10,
    border: 'none',
}));
const groupChat = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff', display: 'flex' }}>
            <Box sx={{ marginLeft: '10px', marginRight: '10px', display: 'flex', flexDirection: 'column', }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex' }}><p style={{ color: '#232360' }}>Member </p><p style={{ color: '#5051F9' }}> (25)</p></Box>
                    <Box sx={{ cursor: 'pointer' }}>View All</Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                        {
                            <SmallAvatar src={Green} />
                        }
                    >
                        <Avatar alt="Travis Howard" src={avata1} sx={{ cursor: 'pointer' }} />
                    </Badge>
                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                        {
                            <SmallAvatar src={Green} />
                        }
                    >
                        <Avatar alt="Travis Howard" src={avata2} sx={{ cursor: 'pointer' }} />
                    </Badge>
                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                        {
                            <SmallAvatar src={Green} />
                        }
                    >
                        <Avatar alt="Travis Howard" src={avata3} sx={{ cursor: 'pointer' }} />
                    </Badge>
                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                        {
                            <SmallAvatar src={Yellow} />
                        }
                    >
                        <Avatar alt="Travis Howard" src={avata4} sx={{ cursor: 'pointer' }} />
                    </Badge>
                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                        {
                            <SmallAvatar src={Yellow} />
                        }
                    >
                        <Avatar alt="Travis Howard" src={avata5} sx={{ cursor: 'pointer' }} />
                    </Badge>
                </Box>

                <Box sx={{ marginTop: '30px', fontSize: '14px', color: '#000000', }}>Group Chat</Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'auto', height: '330px', }}>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box>
                            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                                {
                                    <SmallAvatar src={Green} />
                                }
                            >
                                <Avatar alt="Travis Howard" src={avata5} sx={{ height: '25px', width: '25px' }} />
                            </Badge>
                        </Box>
                        <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
                            <Box sx={{ borderRadius: '4px', backgroundColor: "#F3F5F7", color: '#768396', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <p style={{ margin: '3px' }}>Hello! 👋</p>
                            </Box>
                            <Box sx={{ color: '#AAB1B8' }}>08.00 am</Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Box sx={{ marginRight: '20px', marginTop: '10px' }}>
                            <Box sx={{ borderRadius: '4px', backgroundColor: "#5051F9", color: '#ffffff', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <p style={{ margin: '3px' }}>Hi, Everyone 🔥</p>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', color: '#AAB1B8', alignItems: 'center' }}>
                                <img src={Check} height={10} width={10} />
                                08.00 am
                            </Box>
                        </Box>
                        <Box>
                            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                                {
                                    <SmallAvatar src={Green} />
                                }
                            >
                                <Avatar alt="Travis Howard" src={avata5} sx={{ height: '25px', width: '25px' }} />
                            </Badge>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box>
                            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                                {
                                    <SmallAvatar src={Green} />
                                }
                            >
                                <Avatar alt="Travis Howard" src={avata5} sx={{ height: '25px', width: '25px' }} />
                            </Badge>
                        </Box>
                        <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
                            <Box sx={{ borderRadius: '4px', backgroundColor: "#F3F5F7", color: '#768396', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <p style={{ margin: '3px' }}>How are you, What did you do everyone</p></Box>
                            <Box sx={{ color: '#AAB1B8' }}>08.00 am</Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box>
                            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent=
                                {
                                    <SmallAvatar src={Green} />
                                }
                            >
                                <Avatar alt="Travis Howard" src={avata5} sx={{ height: '25px', width: '25px' }} />
                            </Badge>
                        </Box>
                        <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
                            <Box sx={{ borderRadius: '4px', backgroundColor: "#F3F5F7", color: '#768396', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Button>
                                    <p style={{ margin: '3px', display: 'flex', alignItems: 'center' }}>
                                        <img src={Voice} /> 1:25
                                    </p>
                                </Button>
                            </Box>

                        </Box>
                    </Box>


                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '10px' }}>
                    <input style={{ borderRadius: '10px', border: 'none', backgroundColor: '#F3F7FA', height: '50px' }} placeholder='write here...' />
                    <KeyboardVoiceIcon sx={{ color: '#768396', cursor: 'pointer' }} />
                    <MoreHorizIcon sx={{ color: '#768396', cursor: 'pointer' }} />
                </Box>
            </Box>
        </Box>
    )
}

export default groupChat