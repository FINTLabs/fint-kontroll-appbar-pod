import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {ApartmentOutlined, PersonOutlined} from "@mui/icons-material";
import {Icon} from "@mui/material";
import axios from "axios";

function MeInfo() {

    interface IMeInfo {
        "firstName": string;
        "lastName": string;
        "organisationId": string;
        "mail": string;
    }

    const [me, setMe] = useState<IMeInfo | null>(null);


    useEffect(() => {

        axios.get("api/users/me")
            .then(response => {
                   // console.log("Me info: ", response.data);
                    setMe(response.data)
                }
            )
            .catch((err) => {
                console.error(err);
            })
    }, []);


    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box>
                <Typography sx={{m: 2}}>
                    <Icon fontSize={"small"} sx={{color: "white", mr: 1}}><ApartmentOutlined/></Icon>
                    {me?.organisationId}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{m: 2}}>
                    <Icon fontSize={"small"} sx={{color: "white", mr: 1}}><PersonOutlined/></Icon>
                    {me?.firstName} {me?.lastName}
                </Typography>
            </Box>

        </Box>
    );
}

export default MeInfo;