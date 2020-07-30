import React from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'
import {axiosWithAuth} from '../utls/axiosWithAuth'

const ReviewCard = ({rev}) => {


    const deleteReview = (id) => {
        axiosWithAuth().delete(`/api/reviews/${id}`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }


    return(
        <CardContainer>
            <p style={{color: 'red'}} onClick={()=>deleteReview(rev.id)}>X</p>
            <Title>{rev.name}</Title>
            <p style={{background: 'blue', color: 'white', visibility: rev.gn_bath ? 'visible': 'hidden'}}>Gender Neutral Bathroom</p>
            <Address>{rev.address}</Address>
            <ImgDiv></ImgDiv>
            <StarRating rating={rev.myRating}/>
        </CardContainer>
    )
}

export default ReviewCard;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2%;
`;

const Title = styled.h2``;

const Address = styled.p``;

const ImgDiv = styled.div`
    height: 300px;
    width: 300px;
    background: grey;
`;

