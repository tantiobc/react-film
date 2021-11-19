import React, {useState, useEffect} from "react";
import styled from "styled-components";
import movieData, { IMAGE_URL } from "./movieData";
import MovieObject from "./movie";
import Wishlisted from "./wishlisted";

const Main = styled.div`
    color: whitesmoke;
    padding: 10px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
    justify-content: center;
`;

const WishListButton = styled.button`
    background-color: whitesmoke;
    position: fixed;
    padding: 10px;
    bottom: 0pt;
`;

const ListButton = styled.button`
    background-color: whitesmoke;
    position: fixed;
    padding: 10px;
    bottom: 0pt;
`;


function Content (){
    const[isMovieList, setIsMovieList] = useState(true);
    const[wishlist, setWishList] = useState([]);

    function alternateList (){
        setIsMovieList((prevIsMovieList) => !prevIsMovieList)
    };

    useEffect(() => {
        const wishlistCandidate = localStorage.getItem("wishlist");
        if (wishlistCandidate !== null && wishlistCandidate !== undefined){
            setWishList(JSON.parse(wishlistCandidate));
        }
    }, [])

    useEffect (() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    function addToWishList (addedMovieTitle){
        setWishList((prevWishlist) => {
            let isInWishlist = false;
            for (const wishlistedMovie of prevWishlist){
                if (addedMovieTitle === wishlistedMovie){
                    isInWishlist = true;
                    break
                }
            }

            if  (isInWishlist){
                return prevWishlist
            } else {
                return prevWishlist.concat(addedMovieTitle);
            }
        })
    };

    function removeFromWishlist (removedMovieTitle){
        setWishList((prevWishlist) => {
           return prevWishlist.filter((value, index, arr) => {
               return value !== removedMovieTitle;
           })
        })
    }

    function movieMaker (){
        let movieList = [];
        for (const movie of movieData){
            movieList.push(<MovieObject title={movie.title} posterPath={`${IMAGE_URL}${movie.poster_path}`} summary={movie.overview} addToWishlist={addToWishList}/>)
        };
        return movieList;
    }

    function WishlistObjectMaker(){
        let WishlistObjectList = [];
        for (const movieTitle of wishlist){
          WishlistObjectList.push(<Wishlisted title={movieTitle} removeFromWishlist={removeFromWishlist}/>)
        }

        return WishlistObjectList;
    }

    if (isMovieList){
        return(
            <Main>
                <WishListButton onClick = {alternateList}>WishList</WishListButton>
                <ListContainer>
                    {movieMaker()}
                </ListContainer>
            </Main>    
        )
    } else {
        return(
            <Main>
                <ListButton onClick = {alternateList}>Back to List</ListButton>
                {WishlistObjectMaker()}
            </Main>
        )
    }

    
};

export default Content;