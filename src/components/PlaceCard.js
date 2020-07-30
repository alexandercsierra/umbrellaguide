import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    margin-top: 4%;
    width: 50%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const TheCard = (props) => {
  const {type, imgUrl, name, formattedAddress} = props;
  return (
    <div>
      <StyledCard>
        <div>
          <h3>{name}</h3>
          <h4>{formattedAddress}</h4>
        </div>
        <img width="100%" src={imgUrl} alt="Card image cap" />
        <div>
          <p>{type}</p>
        </div>
      </StyledCard>
    </div>
  );
};

export default TheCard;