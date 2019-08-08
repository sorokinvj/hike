// core libs
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Logo from '../components/Logo'

const MainPage = styled.div`
  background: #030E47;
  padding-top: 100px;
  height: 100vh;

  .logo {
    margin: 0 auto 50px;
    width: 150px;
    img {
      width: 150px;
    }
  }
  .player-wrap {
    margin: 0 auto;
    width: 640px;
    height: 360px;
    @media (max-width: 375px){
      width: 100%;
      height: 209px;
    }
    @media (max-width: 415px){
      width: 415px;
      height: 234px;
    }
  }

  .center-text {
    margin: 30px auto;
    width: 50%;
    p, a {
      color: white;
      font-family: 'Fira Sans', sans-serif;
      margin: 0 auto;
      text-align: center;
    }
    a {
      width: 100%;
    }
  }

`


class Index extends React.Component {
//   static propTypes = {
//   }

//   static defaultProps = {
//   }


//   static async getInitialProps(ctx) {
//     // получаем все необходимое для рендеринга компонента от сервера

//     return { };
//   }


//   componentDidMount() {

//   }

//   componentDidUpdate(prevProps) {

//   }

  render() {
    return (
      <MainPage>
        <Logo/>
        <div className="player-wrap">
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=pgm-LWY7BLU' 
            playing           
            width='100%'
            height='100%'
          />
        </div>
        <div className="center-text">
          <p>
            <a href="mailto:hello@hiketrips.com">
              hello@hiketrips.com
            </a>
          </p>
        </div>
      </MainPage>
    );
  }
}



export default Index;
