/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyImage from './img/27368880_749285908601615_4401348558443893886_o.jpg';
import Slack from './img/HNG9-slack.png';
import Github from './img/HNG9-Github-Icon.png'
import Internship from './img/HNG9-Zuri.Internship_Logo.png'
import FooterLogo from './img/HNG-Footer-text.png'
import HngLogo from './img/HNG-I4G.png'

const Page = () => {
  return (
    <div className='container'>
        <div className='header'>
            <img src={MyImage} className='header-pic' width='100' id='profile_img' />
        </div>

        <div className='myName'>
            <h3>Agammegwa Udo Philip</h3>
            <div id='slack' hidden>Philip-marie</div>
        </div>


        <div className='main'>
          <ul>
            <li><a target='blank' href='https://twitter.com/Uphilipeh' className='mainItems' id='twitter'>Twitter Link</a></li>
            <li><a target='blank' href='https://training.zuri.team/' className='mainItems' id='btn_zuri'>Zuri Team</a></li>
            <li><a target='blank' href='https://books.zuri.team/' className='mainItems' id='books'>Zuri Books</a></li>
            <li><a target='blank' href='https://books.zuri.team/python-for-beginners?ref_id=agammegwaudophilip' className='mainItems' id='book__python'>python Books</a></li>
            <li><a target='blank' href='https://background.zuri.team/' className='mainItems' id='pitch'>Background Checks For Coders</a></li>
            <li><a target='blank' href='https://books.zuri.team/design-rules' className='mainItems' id='book__design'>Zuri Free Design Books</a></li>
          </ul>
        </div>


        <div className='second-main'>
          <a href='#' className='link'><img src={Slack} className='slackPicture' /></a>
          <a href='#' className='link'><img src={Github} className='githubPicture' /></a>
        </div>


        <div className='footer'>
          <img src={Internship} width='200'/>
          <img src={FooterLogo} width='200'/>
          <img src={HngLogo} width='200'/>
        </div>
    </div>
  )
}

export default Page