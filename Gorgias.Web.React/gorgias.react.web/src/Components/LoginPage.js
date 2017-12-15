import React from 'react';
import AccountContent from './LoginSections/AccountContent.js'


export class LoginPage extends React.Component {
   render() {
      return(
        <div>
            <AccountContent accountType={this.props.accountType}/>
        </div>
      )
   }
}
