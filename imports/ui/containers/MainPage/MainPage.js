import React, {useState} from 'react';
import {Container, Typography} from "@material-ui/core";
import RangeSelection from '../../components/RangeSelection/RangeSelection';
import WordList from '../../components/WordList/WordList';

const MainPage = () => {

    const [words, setWords] = useState(null);


    return (
        <Container>
            <Typography variant={'h2'}>
                Welcome to the Counting App
            </Typography>
            <RangeSelection setWords={setWords}/>
            {words && <WordList words={words}/>}
        </Container>
    )
}

export default MainPage;