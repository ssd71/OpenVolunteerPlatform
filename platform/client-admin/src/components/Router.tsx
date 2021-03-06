import React from 'react';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { IonReactRouter } from "@ionic/react-router"
import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/react';
import { ActionPage, ProfilePage } from '../pages';
import { ViewActionPage } from '../pages/ViewActionPage';
import { ViewVolunteerPage } from '../pages/ViewVolunteerPage';

import { Menu } from './Menu';
import { SchedulePage } from '../pages/SchedulePage';
import { MapPage } from '../pages/MapPage';
import { OptimizePage } from '../pages/OptimizePage';
import { DistributionCentrePage } from '../pages/DistributionCentrePage';
import { RecipientsPage } from '../pages/RecipientsPage';
import { VolunteersPage } from '../pages/VolunteersPage';
import { ViewRecipientPage } from '../pages/ViewRecipientPage';

export const Router: React.FC = () => {
  return (
    <IonApp className={'dark-theme'}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Switch>
              <Route path="/viewAction/:id" component={ViewActionPage} exact />
              <Route path="/actions" component={ActionPage} exact />
              <Route path="/map" component={MapPage} exact />
              <Route path="/schedule" component={SchedulePage} exact />
              <Route path="/optimize" component={OptimizePage} exact />
              <Route path="/reports" component={OptimizePage} exact />
              <Route path="/volunteers" component={VolunteersPage} />
              <Route path="/manageVolunteer/:id" component={ViewVolunteerPage} exact />
              <Route path="/recipients" component={RecipientsPage} exact />
              <Route path="/manageRecipient/:id" component={ViewRecipientPage} exact />
              <Route path="/distributionCentre" component={DistributionCentrePage} exact />
              <Route path="/profile" component={ProfilePage} exact />
              <Redirect to={{ pathname: "actions" }} />
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}