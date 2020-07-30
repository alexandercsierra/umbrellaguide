import React, {useState} from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'
import {axiosWithAuth} from '../utls/axiosWithAuth'

const AddReview = () => {


    const [review, setReview] = useState({
        text:"",
        gn_bath: false
    })

    const [rating, setRating] = useState(0)


    const handleChange = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        let totalReview = {...review};
        totalReview.rating = rating
        axiosWithAuth().post(`/api/reviews/${1}`, totalReview)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }



    return (
        <Container>
            <Title>Add a Review</Title>
            <Form onSubmit={onSubmit}>
                {/* <Input name="name" placeholder="name" value={review.name} onChange={handleChange}/> */}
                <TextArea rows="10" cols="50" name="text" placeholder="text" value={review.text} onChange={handleChange}/>
                <label htmlFor="gn_bath">Gender Neutral Bathroom</label>
                <Input id="gn_bath" name="gn_bath" checked={review.gn_bath} type="checkbox" onChange={()=>setReview({...review, gn_bath: !review.gn_bath})}/>
                <StarRating setRating={setRating}/>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default AddReview;

const Container = styled.div`
    min-height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 4%;
`;

const Title = styled.h1`
    margin: 4% 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

const Input = styled.input`
    margin: 2% 0;
    font-size: 1.2rem;
    padding: 2%;
`;

const TextArea = styled.textarea`
    margin: 2% 0;
    font-size: 1.2rem;
    padding: 2%;
    resize: none;

`;

const Button = styled.button`
    width: 20%;
    padding: 1.5%;
    margin: 2% auto;
    border: none;
    background: #0A1331;
    color: white;
    border-radius: 5px;
`;