
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const style = {
  footer: {
    backgroundColor: '#CCCCCB',
    fontFamily: 'Montserrat, sans-serif',
    color: '#2d2d2d'
  },
  footerContainer: {
    padding: '17px 15px 17px 15px'
  },
  signatureFont1: {
    fontSize: '14px',
    marginBottom: 0
  },
  signatureFont2: {
    fontWeight: 700,
    fontSize: '20px'
  },
  link: {
    fontSize: '16px',
    color: '#2d2d2d',
    fontFamily: 'Montserrat, sans-serif'
  },
  copyright: {
    paddingTop: '1.2em',
    fontSize: '12px'
  }
}

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .link {
    font-size: 16px;
    color: #2d2d2d;

    &:not(:first-child){
      margin-left: 2em;
    }
  }
`

const Footer = () => {
  return (
    <footer className='navbar navbar-fixed-bottom fixed-bottom' style={style.footer}>
      <div className='container-fluid' style={style.footerContainer}>
        <div className='row'>
          <div className='col'>
            <p style={style.signatureFont1}>Demo Footer</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-4'>
            <div style={style.signatureFont2}>Office</div>
          </div>
          <div className='col-sm-12 col-md-8 col-lg-8'>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;