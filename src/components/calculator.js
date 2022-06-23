import React, {useState} from "react";
import { SimpleKeyboard } from "./simpleKeyboard";
import { AdvancedKeyboard } from "./advancedKeyboard";
import { Box, FormGroup, FormControlLabel, Switch } from "@mui/material";
import { OutputScreen } from "./outputScreen";

export function Calculator() {

    const [input, setInput] = useState('0');
    const [advancedMode, setAdvancedMode] = useState(false);

    //Handles click events for the advanded mode. The function switches states for the advancedMode constant
    const handleClick = (event) => {
        if (advancedMode) {
            setAdvancedMode(false);
            setInput('0');
        } else {
            setAdvancedMode(true);
            setInput('0');
        }
    }

    return (
        <div>
            <FormGroup>
                <FormControlLabel onClick={handleClick} control={<Switch checked={advancedMode} />} label="Advanced" />
            </FormGroup>
            <Box>
                <OutputScreen input={input}/>
                {
                    advancedMode ? <AdvancedKeyboard input={input} setInput={setInput}/> : <SimpleKeyboard input={input} setInput={setInput}/>
                }
            </Box>
        </div>
    )

}