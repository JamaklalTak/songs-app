import React from 'react';
import { connect } from 'react-redux';

import Image from '../../Helpers/Image';

import { getDataSelector } from './store/reducer';

import HomeStyledContainer from './Home.styled';

const Home = (props) => {
  return(
    <HomeStyledContainer>
      <div className='container'>
        {props.movieData && props.movieData.length > 0 &&
        props.movieData.map(item => {
          return(
            <div className='poster-container'>
              <Image src={item.artworkUrl100} alt='songImage'/>
              <div className='artist-name headerBold12'>
                <span className='data-title'>Artist: </span>
                {item.artistName}
              </div>
              <div className='track-name header12'>
                <span className='data-title'>Track: </span>{item.trackName}
              </div>
              <div className='genre header12'>
                <span className='data-title'>Genre: </span>
                {item.primaryGenreName}
              </div>
              <div className='kind header12'>
                <span className='data-title'>Kind: </span>
                {item.kind}
              </div>
            </div>
          )
        })
        }
      </div>
    </HomeStyledContainer>
  );
}

const mapStateToProps = state => ({
    movieData: getDataSelector(state)
})
export default connect(mapStateToProps)(Home);