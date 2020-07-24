
import React from 'react'
import Ratings from 'react-ratings-declarative';

class StarRating extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rating: props.rating
        }
    
    

    this.changeRating = ( newRating ) => {
      this.setState({
        rating: newRating
      });

      if(props.setRating){
         props.setRating(newRating)
      }
    }

}

    render() {
      return (
          <Ratings
            rating={this.state.rating}
            widgetRatedColors="#a8a81c"
            changeRating={this.changeRating}
            widgetDimensions="40px"
            widgetSpacings="10px"
          >
            <Ratings.Widget widgetHoverColor="#d1d123"/>
            <Ratings.Widget widgetHoverColor="#d1d123"/>
            <Ratings.Widget widgetHoverColor="#d1d123"/>
            {/* <Ratings.Widget
              widgetDimension="60px"
              svgIconViewBox="0 0 5 5"
              svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
            /> */}
            <Ratings.Widget widgetHoverColor="#d1d123" />
            <Ratings.Widget widgetHoverColor="#d1d123"/>
          </Ratings>
      );
    }
}


class Bar extends React.Component {
  render() {
    return (
      <Ratings
        rating={3.403}
        widgetDimensions="30px"
        widgetSpacings="5px"
      >
        <Ratings.Widget widgetRatedColor="green" />
        <Ratings.Widget widgetSpacing="30px" widgetDimension="15px" />
        <Ratings.Widget widgetRatedColor="black" />
        <Ratings.Widget widgetRatedColor="rebeccapurple" />
        <Ratings.Widget />
      </Ratings>
    );
  }
}

export default StarRating;