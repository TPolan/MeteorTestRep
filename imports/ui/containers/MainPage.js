import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import RangeSelection from '../components/RangeSelection';
import WordList from '../components/WordList';

const MainPage = () => {

    const [words, setWords] = useState(null);


    return (
        <Container>
            <Typography variant={'h1'}>
                Welcome to the Counting App
            </Typography>
            <RangeSelection setWords={setWords}/>
            {words && <WordList words={words}/>}
        </Container>
    )
}

export default MainPage;