import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/home/Home';
import TourPlaner from './components/tourplanerform/TourPlaner';
import User from './components/user/User';
import TourPlanNote from './components/tourplanenote/TourPlanNote';
import TourGuide from './components/tourguide/TourGuide';
import Bus from './components/bus/Bus';
import ByTrain from './components/train/ByTrain';
import ByLaunch from './components/launch/ByLaunch';
import LocalFood from './components/localfood/LocalFood';
import Restaurant from './components/restaurant/Restaurant';
import Hotel from './components/hotel/Hotel';
import Media from './components/media/Media';
import TourRoute from './components/tourroute/TourRoute';
import Journey from './components/journey/Journey';
import Profile from './components/profile/Profile';



function App() {
  return (
    <>
    <div className="project-main-app-box">

     <div className="project-tour-planer-searchbox text-center">
        <input type="search" placeholder="search..."/>
        <span><button><i className="fas fa-search"></i></button></span>
     </div>
       
    <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/tour-planer" component={TourPlaner}/>
      <Route exact path="/user" component={User}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/tour-plan-note" component={TourPlanNote}/>
      <Route exact path="/tour-guide" component={TourGuide}/>
      <Route exact path="/by-bus" component={Bus}/>
      <Route exact path="/by-train" component={ByTrain}/>
      <Route exact path="/by-launch" component={ByLaunch}/>
      <Route exact path="/local-food" component={LocalFood}/>
      <Route exact path="/restaurant" component={Restaurant}/>
      <Route exact path="/hotel" component={Hotel}/>
      <Route exact path="/media" component={Media}/>
      <Route exact path="/tour-route" component={TourRoute}/>
      <Route exact path="/journey" component={Journey}/>

    </Switch>

    </div>
    </>
  );
}

export default App;
