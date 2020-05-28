const React = require('react');
const show = console.log;
const Default = require('../Default.jsx');

class LoginUser extends React.Component {
    render() {
      return (
        <Default>
              <head>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
                </head>
                <body>
                <div class="headernew">
                <div class="frooknew">
                <h1>Frooking (<strong>FR</strong><span class="dark">iends</span><span class="dark"> c</span><strong>OOKING</strong>)</h1>
                <br/>
                </div>
               </div>
                
          <div>
              <h1>Log in</h1>
              <form action="/sessions/" method="POST">
                  Username: <input type="text" name="username" /><br/>
                  Password: <input type="password" name="password" /><br/>
                  <input type="submit" value="Log in"/>
               </form>
               </div>
               </body>
          </Default>
          );
    }
  }
  
  module.exports = LoginUser;