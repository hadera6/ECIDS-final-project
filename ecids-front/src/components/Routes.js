import React from 'react';

import CitizenDetail from './user/CitizenDetail.js';
import HomePage from './user/HomePage.js';
import USetting from './user/USetting.js';
import VerifyID from './user/VerifyID.js';

import AddCitizen from './employee/AddCitizen.js';
import BanSerivice from './employee/BanService.js';
import ModifyCitizen from './employee/ModifyCitizen.js';
import Notification from './employee/Notification.js';
import PrepareID from './employee/PrepareID.js';
import ESetting from './employee/ESetting.js';

import AddEmployee from './admin/AddEmployee.js';
import PostNotification from './admin/PostNotification.js';
import Report from './admin/Report.js';
import ASetting from './admin/ASetting.js';
import Transaction from './admin/Transaction.js';


import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';

const Routes = (props) => {
    
  switch (props.type) {
    case 'user':
    return(
      <Switch>
        <Route path='/dashboard' exact component={HomePage} />
        <Route path='/dashboard/detailcitizen' component={CitizenDetail} />
        <Route path='/dashboard/homepage' component={HomePage} />
        <Route path='/dashboard/usetting' component={USetting} />
        <Route path='/dashboard/verifyid' component={VerifyID} />
        </Switch>
    );
    break;
    case 'employee':
    return(
      <Switch>
        <Route path='/dashboard' exact component={Notification} />
        <Route path='/dashboard/registercitizen' component={AddCitizen} />
        <Route path='/dashboard/banservice' component={BanSerivice} />
        <Route path='/dashboard/modifycitizen' component={ModifyCitizen} />
        <Route path='/dashboard/notification' component={Notification} />
        <Route path='/dashboard/prepareid' component={PrepareID} />
        <Route path='/dashboard/esetting' component={ESetting} />
      </Switch>
    );
    break;
    case 'admin':
    return(
      <Switch>
        <Route path='/dashboard' exact component={Report} />
        <Route path='/dashboard/addemployee' component={AddEmployee} />
        <Route path='/dashboard/postnotification' component={PostNotification} />
        <Route path='/dashboard/asetting' component={ASetting} />
        <Route path='/dashboard/transaction' component={Transaction} />
        <Route path='/dashboard/report' component={Report} />
      </Switch>
    );
  }
}
export default Routes;
