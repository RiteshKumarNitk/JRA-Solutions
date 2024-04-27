import React, { useState, useEffect } from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Modal from "react-modal";
import "./style.css";
import Civil from "../civil/Civil";
import Criminal from "../criminal/Criminal";
import BankingFinance from "../banking-finance/BankingFinance";
import SecuritiesLaws from "../securities-laws/SecuritiesLaws";
import ForeignExchange from "../foreign-exchange/ForeignExchange";
import IntellectualPropertyRights from "../intellectual-property-rights/IntellectualPropertyRights";
import ConstitutionalLaw from "../constitutional-law/ConstitutionalLaw";
import ServiceLaw from "../service-law/ServiceLaw";
import AlternateDisputeResolution from "../alternate-dispute-resolution/AlternateDisputeResolution";
import CoreTeam from "../coreTeam/CoreTeam";
import Newsltr from "../newsltr/Newsltr";
import Articles from "../articles/Articles";
import {
  // Card,
  // CardHeader,
  // CardBody,
  // CardFooter,
  // Typography,
  Button,
} from "@material-tailwind/react";
// import { DialogDefault } from "../about/DialogDefault";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
Modal.setAppElement("#root");

const Pages = () => {
  useEffect(() => {
    setOpen(true);
  }, []);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="pages-container">
      <>
        <Dialog
          open={open}
          handler={handleOpen}
          dismiss={{ outsidePress: false, enabled: true, escapeKey: false }}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>I Agree</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/civil" component={Civil} />
          <Route exact path="/criminal" component={Criminal} />
          <Route exact path="/banking-finance" component={BankingFinance} />
          <Route exact path="/securities-laws" component={SecuritiesLaws} />
          <Route exact path="/foreign-exchange" component={ForeignExchange} />
          <Route
            exact
            path="/intellectual-property-rights"
            component={IntellectualPropertyRights}
          />
          <Route
            exact
            path="/constitutional-law"
            component={ConstitutionalLaw}
          />
          <Route exact path="/service-law" component={ServiceLaw} />
          <Route
            exact
            path="/alternate-dispute-resolution"
            component={AlternateDisputeResolution}
          />
          <Route exact path="/CoreTeam" component={CoreTeam} />
          <Route exact path="/Newsltr" component={Newsltr} />
          <Route exact path="/Articles" component={Articles} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Pages;
