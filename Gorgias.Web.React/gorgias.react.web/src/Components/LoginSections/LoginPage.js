import React from 'react';
import AccountContent from './AccountContent.js'


export class LoginPage extends React.Component {
   render() {
      return(
        <div>
            <AccountContent accountType={this.props.accountType}/>
        </div>
      )
   }
}
