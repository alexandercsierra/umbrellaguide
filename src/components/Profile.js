import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utls/axiosWithAuth'
import Search from './Search'

const Profile = ({addPlaces}) => {

    const[user, setUser]  = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [reviews, setReviews] = useState([])


    useEffect(()=>{
        let isMounted = true;

        if(isMounted){
            addPlaces();
            setTimeout(()=>{setIsLoaded(true)}, 200)
        }

        axiosWithAuth().get('/api/auth')
                .then(res=>{
                    if(isMounted){
                        setUser(res.data[0])
                    }
                    
                })
                .catch(err=>console.log(err))


            axiosWithAuth().get(`/api/reviews/${1}`)
                .then(res=>{
                    if(isMounted){
                        setReviews(res.data)
                    }
                    
                })
                .catch(err=>console.log(err))



        return () => {isMounted = false}
    },[])

    const history = useHistory();
    // const [reviews, setReviews] = useState([
    //     {
    //         id: 1,
    //         name: 'Bliss Healthcare',
    //         address: '12345 Conway Ave. Orlando, FL 32822',
    //         rating: 4,
    //         gn_bath: true
            
    //     },
    //     {
    //         id: 2,
    //         name: 'ABC Massage',
    //         address: '12345 Crystal Lake Blvd. Orlando, FL 32822',
    //         rating: 2.5,
    //         gn_bath: false
            
    //     },
    //     {
    //         id: 3,
    //         name: 'The Peacock Room',
    //         address: '12345 Mills Ave. Orlando, FL 32822',
    //         rating: 3,
    //         gn_bath: false
            
    //     },
    //     {
    //         id: 4,
    //         name: 'Lou Gardens',
    //         address: '12345 Mills Ave. Orlando, FL 32822',
    //         rating: 1,
    //         gn_bath: false
            
    //     }
    // ])




    return(
        <Container>
            <Header>
                <SearchDiv>
                    <Title>Search for a business</Title>
                    <InputDiv>
                    {isLoaded && <Search/>}
                        {/* <Input placeholder="search"/> */}
                        {/* <Button>🔎</Button> */}
                    </InputDiv>
                </SearchDiv>
                <UserDiv>
                    <InnerUserDiv>
                        <ProfilePic>
                            <h3>username</h3>
                            <ImgDiv>
                            </ImgDiv>
                        </ProfilePic>
                        <AddDiv onClick={()=>history.push('/addreview')}>ADD A REVIEW</AddDiv>
                    </InnerUserDiv>
                </UserDiv>
            </Header>
            <ReviewContainer>
                {reviews && reviews.map(rev=><ReviewCard key={rev.id} rev={rev}/>)}
            </ReviewContainer>
        </Container>
    )
}

export default Profile;

const ReviewContainer = styled.div`
    // padding: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
`;

const Title = styled.h2``;

const InputDiv = styled.form`
    // border: 1px solid red;
    // padding-left: 4%;
    width: 60%;
    margin-top: 2%;
`;
const Input = styled.input`
    height: 40px;
    border: none;
    width: 75%;
    padding: 4%;
    font-size: 1rem;
    background: #F0F0F0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;
const Button = styled.button`
    height: 40px;
    width: 25%;
    border: none;
    background: #0A1331;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

const Container = styled.div`
    background: white;
    color: #0A1331;
    min-height: 100vh;
    border: 1px solid red;
    padding: 0 4%;
`;
const Header = styled.header`
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    padding-top: 4%;
`;
const UserDiv = styled.div`
    color: #0A1331;
    // border: 1px solid red;
    width: 50%;
    display: flex;
    justify-content: flex-end;
   
`;

const ProfilePic = styled.div`
    display: flex;
    // border: 1px solid green;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`;

const ImgDiv = styled.div`
    width: 100px;
    height: 100px;
    background: green;
    margin: 0 4%;
`;

const AddDiv = styled.div`
    background: #0A1331;
    color: white;
    width: 30%;
    text-align: center;
    border-radius: 5px;
    padding: 2%;
    align-self: flex-end;
    margin: 6%;
    cursor: pointer;
`;

const InnerUserDiv = styled.div`
    // border: 1px solid red;
    width: 50%;
    display: flex;
    // align-items: flex-end;
    flex-direction: column;
`;

const SearchDiv = styled.div`
    color: #0A1331;
    // border: 1px solid red;
    width: 50%;
    padding-left: 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;