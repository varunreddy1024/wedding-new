import React from 'react';

const FooterComponent = () => {
  return (
    <footer>
      <div className="flex-col">
        <h1>
          Powered&nbsp;&nbsp; by &nbsp;&nbsp;{' '}
          <a style={{ textDecoration: 'underline' }} href="https://wethinc.in/">
            We&nbsp; Thinc&nbsp; Solutions
          </a>
        </h1>
        <h2 style={{ margin: '15px 0px 5px' }}>We &nbsp;Think &nbsp;for&nbsp; your&nbsp; growth</h2>
      </div>
    </footer>
  );
};

export default FooterComponent;
