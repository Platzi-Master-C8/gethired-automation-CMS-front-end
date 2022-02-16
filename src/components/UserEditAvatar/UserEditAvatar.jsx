import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { styled } from '@mui/material/styles';

const AvatarCustom = styled(Avatar)`
    width: 200px;
    height: 200px;
    margin: 40px auto;
    background-color: #7d81f6;
    cursor: pointer;

    .userEdit__typograpfy {
        font-size: 90px;
        font-weight: 600;
    }
    .userEdit__stack {
        display: none;
    }

    :hover .userEdit__stack {
        display: flex;
        align-items: center;
    }

    :hover .userEdit__typograpfy {
        display: none;
    }
`;

const UserEditAvatar = () => {
    return (
        <Stack>
            <AvatarCustom>
                <Typography className="userEdit__typograpfy">J</Typography>
                <Stack className="userEdit__stack">
                    <CameraAltOutlinedIcon sx={{ fontSize: 90 }} />
                    <Typography sx={{ fontSize: 18, textAlign: 'center', fontWeight: 600 }}>
                        Actualiza tu foto de perfil
                    </Typography>
                </Stack>
            </AvatarCustom>
        </Stack>
    );
};

export default UserEditAvatar;
