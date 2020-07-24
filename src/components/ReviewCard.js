import React from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'

const ReviewCard = ({rev}) => {
    return(
        <CardContainer>
            <Title>{rev.name}</Title>
            <p style={{background: 'blue', color: 'white', visibility: rev.gn_bath ? 'visible': 'hidden'}}>Gender Neutral Bathroom</p>
            <Address>{rev.address}</Address>
            <ImgDiv></ImgDiv>
            <StarRating rating={rev.rating}/>
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

