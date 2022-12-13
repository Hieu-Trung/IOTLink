import React from 'react'
import AvatarGroup from '@mui/material/AvatarGroup';
import avata1 from '../image/avata1.png';
import avata2 from '../image/avata2.png';
import avata3 from '../image/avata3.png';
import avata4 from '../image/avata4.png';
import avata5 from '../image/avata5.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import Image1 from '../image/image1.png';
import Image2 from '../image/image2.png';
import Image3 from '../image/image3.png';
import Image4 from '../image/image4.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const task = () => {
    return (
        <Box sx={{ width: '1000px', display: 'flex', flexDirection: 'column', }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ marginLeft: '2%', fontSize: '25px', }}>
                    <p>🔥 Task</p>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                    <AvatarGroup>
                        <Avatar src={avata1} />
                        <Avatar src={avata2} />
                        <Avatar src={avata3} />
                        <Avatar src={avata4} />
                        <Avatar src={avata5} />
                    </AvatarGroup>
                    <Box sx={{ marginLeft: '10px', marginRight: '10px', color: '#8185A0', fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>+6</Box>
                    <Box sx={{ marginRight: '20px', height: '35px', width: '35px', border: '1px dashed #D9E0E8', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', color: '#5D68FE', cursor: 'pointer' }}>+</Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: '500px', overflowX: 'hidden', overflowY: 'auto', display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '200px', height: '470px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', fontSize: '15px', color: '#232360', }}>
                            <p>Backlog</p>
                        </Box>
                        <Box sx={{ marginRight: '15px', display: 'flex' }}>
                            <MoreHorizIcon sx={{ cursor: 'pointer' }} />
                            <Box sx={{ cursor: 'pointer', width: '20px', height: '20px', borderRadius: '7px', backgroundColor: '#E8EAFF' }}>
                                <AddIcon sx={{ color: '#6772FE', fontSize: '20px' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '260px', borderRadius: '10px' }}>
                        <Box sx={{ cursor: 'pointer', marginLeft: '15px', backgroundColor: '#5051F9', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>Design</Box>
                        <Box sx={{ display: 'flex', justifyContent: ' center' }}>
                            <img src={Image1} style={{ borderRadius: '5px' }} height={80} width={170} />
                        </Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '14px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create styleguide foundation</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata3} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '140px', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', backgroundColor: '#1EA7FF', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>Research</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '14px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Copywriting Content</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '200px', height: '470px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', fontSize: '15px', color: '#232360', }}>
                            <p>To Do</p>
                        </Box>
                        <Box sx={{ marginRight: '15px', display: 'flex' }}>
                            <MoreHorizIcon sx={{ cursor: 'pointer' }} />
                            <Box sx={{ cursor: 'pointer', width: '20px', height: '20px', borderRadius: '7px', backgroundColor: '#E8EAFF' }}>
                                <AddIcon sx={{ color: '#6772FE', fontSize: '20px' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '140px', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', backgroundColor: '#1EA7FF', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>Research</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>auditing information architecture</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '260px', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', backgroundColor: '#F59E0B', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>Content</Box>
                        <Box sx={{ display: 'flex', justifyContent: ' center' }}>
                            <img src={Image2} style={{ borderRadius: '5px' }} height={80} width={170} />
                        </Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '14px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create styleguide foundation</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata3} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '200px', height: '470px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', fontSize: '15px', color: '#232360', }}>
                            <p>In Progress</p>
                        </Box>
                        <Box sx={{ marginRight: '15px', display: 'flex' }}>
                            <MoreHorizIcon sx={{ cursor: 'pointer' }} />
                            <Box sx={{ cursor: 'pointer', width: '20px', height: '20px', borderRadius: '7px', backgroundColor: '#E8EAFF' }}>
                                <AddIcon sx={{ color: '#6772FE', fontSize: '20px' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '140px', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', backgroundColor: '#E97342', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>Planning</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>auditing information architecture</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '260px', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', backgroundColor: '#5051F9', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>Design</Box>
                        <Box sx={{ display: 'flex', justifyContent: ' center' }}>
                            <img src={Image3} style={{ borderRadius: '5px' }} height={80} width={170} />
                        </Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '14px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create styleguide foundation</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata3} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>

                </Box><Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '200px', height: '470px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', fontSize: '15px', color: '#232360', }}>
                            <p>Review</p>
                        </Box>
                        <Box sx={{ marginRight: '15px', display: 'flex' }}>
                            <MoreHorizIcon sx={{ cursor: 'pointer' }} />
                            <Box sx={{ cursor: 'pointer', width: '20px', height: '20px', borderRadius: '7px', backgroundColor: '#E8EAFF' }}>
                                <AddIcon sx={{ color: '#6772FE', fontSize: '20px' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '260px', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', backgroundColor: '#F59E0B', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>Content</Box>
                        <Box sx={{ display: 'flex', justifyContent: ' center' }}>
                            <img src={Image4} style={{ borderRadius: '5px' }} height={80} width={170} />
                        </Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '14px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create styleguide foundation</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata3} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ffffff', width: '100%', height: '140px', borderRadius: '10px' }}>
                        <Box sx={{ marginLeft: '15px', backgroundColor: '#E97342', borderRadius: '4px', color: '#ffffff', width: '50px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>Planning</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#232360', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>auditing information architecture</Box>
                        <Box sx={{ marginLeft: '15px', fontSize: '13px', color: '#768396', fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500', lineHeight: '17px', }}>Create content for peceland App</Box>
                        <Box sx={{ marginLeft: '15px', border: '1px solid #E2E2E2', borderRadius: '4px', width: '90px', height: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-around' }}>Aug 20, 2021</Box>
                        <Box sx={{ marginLeft: '15px', marginRight: '15px', display: 'flex', justifyContent: ' space-between', alignItems: 'center' }}>
                            <Box>
                                <AvatarGroup>
                                    <Avatar src={avata1} sx={{ width: '20px', height: '20px' }} />
                                    <Avatar src={avata2} sx={{ width: '20px', height: '20px' }} />
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#768396' }} />
                                <p style={{
                                    fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '700', fontSize: '12px', lineHeight: '16px', color: '#768396',
                                }}>0/8</p>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default task