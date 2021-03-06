import React, { Component } from "react";
import About from "./BodyAboutComponent";
import Contact from "./BodyContactComponent";
import Home from "./BodyHomeComponent";
//import Directory from "./DirectoryComponent";
//import Experience from "./BodyExperienceComponent";
//import IMClasses from "./BodyIMClassesComponent";
//import IMOffers from "./BodyIMOffersComponent";
//import Nutrition from "./BodyNutritionComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
        //campsite={this.props.campsites.filter((campsite) => campsite.featured)[0]}
        //promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
        //partner={this.props.partners.filter((partner) => partner.featured)[0]}
        />
      );
    };

    /* const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]
          }
          comments={this.props.comments.filter(
            comment => comment.campsiteId === +match.params.campsiteId
          )}
        />
      );
    };   */

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/aboutus" render={() => <About partners={this.props.partners} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
