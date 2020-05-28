const React = require('react');

class NewUser extends React.Component {
    render() {
      return (
          <div>
              <h1>New User</h1>
              <form action="/user/" method="POST">
                  Username: <input type="text" name="username" /><br/>
                  Password: <input type="password" name="password" /><br/>
                  <input type="submit" name="" value="Create User"/>
               </form>
          </div>
          );
    }
  }
  
  module.exports = NewUser;