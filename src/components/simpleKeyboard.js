import React, {useState} from "react";
import { ButtonGroup, Button, Grid } from "@mui/material";
import { simpleCalculate } from './calculatorLogic';


export function SimpleKeyboard (props) {

    const [solved, setSolved] = useState(false);
    const [firstInput, setFirstInput] = useState(true);

    const {input, setInput} = props;

    const handleClick = (event) => {
        if (firstInput) {
            setInput(event.target.value);
            setFirstInput(false);
        } else if (event.target.value === 'C') {
            setInput('0');
            setSolved(false);
            setFirstInput(true);
        } else if (event.target.value === '=') {
            const newInput = input + event.target.value + simpleCalculate(input);
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
                        <Button value='1'>1</Button>
                        <Button value='2'>2</Button>
                        <Button value='3'>3</Button>
                        <Button value='C'>C</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button value='4'>4</Button>
                        <Button value='5'>5</Button>
                        <Button value='6'>6</Button>
                        <Button value='+'>+</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button value='7'>7</Button>
                        <Button value='8'>8</Button>
                        <Button value='9'>9</Button>
                        <Button value='-'>-</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button value='0'>0</Button>
                        <Button value='*'>*</Button>
                        <Button value='/'>/</Button>
                        <Button value='='>=</Button>
                    </ButtonGroup>
                </Grid>

                
            </Grid>
        </div>
    )
}