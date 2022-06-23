import React from "react";
import { Card } from "@mui/material";

export function OutputScreen(props) {

    const {input} = props;

    return (
        <div>
            <Card variant="outlined" >{input}</Card>
        </div>
    )
}