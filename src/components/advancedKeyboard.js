import React, {useState} from "react";
import { ButtonGroup, Button, Grid } from "@mui/material";
import { advancedCalculate } from './calculatorLogic';


export function AdvancedKeyboard (props) {

    const [solved, setSolved] = useState(false);
    const [firstInput, setFirstInput] = useState(true);

    const {input, setInput} = props;

    //Handles click events for the keyboard
    const handleClick = (event) => {
        if (firstInput) {
            setInput(event.target.value);
            setFirstInput(false);
        } else if (event.target.value === 'C') {
            setInput('0');
            setSolved(false);
            setFirstInput(true);
        } else if (event.target.value === '=') {
            const newInput = input + event.target.value + advancedCalculate(input);
            setInput(newInput);
            setSolved(true);
        } else if (solved) {
            setInput('0');
            setSolved(false);
            setFirstInput(true);
        } else {
            const newInput = input + event.target.value;
            setInput(newInput);
        }
    }

    

    return (
        <div>

            <Grid onClick={handleClick}>
                <Grid item xs={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button value='1' style={{maxWidth: '15px'}}>1</Button>
                        <Button value='2' style={{maxWidth: '15px'}}>2</Button>
                        <Button value='3' style={{maxWidth: '15px'}}>3</Button>
                        <Button value='C' style={{maxWidth: '15px'}}>C</Button>
                        <Button value='+' style={{maxWidth: '15px'}}>+</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button value='4' style={{maxWidth: '15px'}}>4</Button>
                        <Button value='5' style={{maxWidth: '15px'}}>5</Button>
                        <Button value='6' style={{maxWidth: '15px'}}>6</Button>
                        <Button value='-' style={{maxWidth: '15px'}}>-</Button>
                        <Button value='!' style={{maxWidth: '15px'}}>!</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button value='7' style={{maxWidth: '15px'}}>7</Button>
                        <Button value='8' style={{maxWidth: '15px'}}>8</Button>
                        <Button value='9' style={{maxWidth: '15px'}}>9</Button>
                        <Button value='*' style={{maxWidth: '15px'}}>*</Button>
                        <Button value='%' style={{maxWidth: '15px'}}>%</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button value='0' style={{maxWidth: '15px'}}>0</Button>
                        <Button value='.' style={{maxWidth: '15px'}}>.</Button>
                        <Button value='log2 ' style={{maxWidth: '15px'}}>log</Button>
                        <Button value='^' style={{maxWidth: '15px'}}>^</Button>
                        <Button value='=' style={{maxWidth: '15px'}}>=</Button>
                    </ButtonGroup>
                </Grid>

                
            </Grid>
        </div>
    )
}