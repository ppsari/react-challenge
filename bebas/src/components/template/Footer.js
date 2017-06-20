import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{position: 'relative',bottom: '0px'}}>
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Random generator</strong> by <a href="http://ppsari.github.io">PPSARI</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT </a>.
          </p>
          <p>
            <a className="icon" href="https://github.com/ppsari/react-challenge">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer