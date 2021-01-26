import React, {useState} from 'react';
import {Grid, TextField, Button} from "@material-ui/core";
import useTranslateNumbers from "../hooks/useTranslateNumbers";

const RangeSelection = ({setWords}) => {
    const [startNum, setStartNum] = useState('1');
    const [endNum, setEndNum] = useState('100');
    const [endNumError, setEndNumError] = useState(false);
    const [startNumError, setStartNumError] = useState(false);

    const handleNumEntry = (event) => {
        if (event.target.id ==="start-number") {
            setStartNum(event.target.value)
        } else {
            setEndNum(event.target.value)
        }

    };

    const handleStartCount = () => {
        setWords(useTranslateNumbers(startNum,endNum))
    };

    const numberValidation = () => {
        if (startNum > endNum) {
            setStartNumError(true)
        }
    };

    return (
        <Grid container justify={'space-around'}>
            <TextField
                item
                onChange={(event)=>handleNumEntry(event)}
                id="start-number"
                label="Number to count from"
                type="number"
                defaultValue={startNum}
                helperText={'start number must be smaller than end number'}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                item
                onChange={(event)=>handleNumEntry(event)}
                id="end-number"
                label="Number to count to"
                type="number"
                defaultValue={endNum}
                helperText={'end number must be higher than start number'}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                item
                variant="contained"
                color="primary"
                onClick={handleStartCount}
            >
                Start the Count
            </Button>
        </Grid>
    )
}

export default RangeSelection;