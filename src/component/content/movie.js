import react, { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.div`
    color: whitesmoke;
    text-align: center;
`;

const Poster = styled.img`
`;

const Title = styled.h2`
`;

const Summary = styled.p`
    display: ${(props) => {
        if(props.display){
            return "inline-block";
        } else{
            return "none";
        }    
    }};
`;

const AddToWishList = styled.button`
    padding: 10px;
`;

function MovieObject (props){
    const[showSummary, setShowSummary] = useState(false);

    useEffect (() => {
        
    });

    function alternateShowSummary (){
        setShowSummary((prevShowSummary) => !prevShowSummary);
    }

    return (
        <Main>
            <Poster onClick={alternateShowSummary}src={`${props.posterPath}`}/>
            <Title>{props.title}</Title>
            <Summary display={showSummary}>{props.summary}</Summary>
            <AddToWishList onClick={() => {props.addToWishlist(props.title)}}>Add to Wishlist</AddToWishList>
        </Main>
    )
}

export default MovieObject;