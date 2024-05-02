import React, {  useEffect } from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import Blog from "../blog/Blog";
import Modal from "react-modal";
import "./style.css";
import { Button } from "@material-tailwind/react";
import {Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";
import aboutUs from "../about-us/aboutUs";
import Teams from "../teams/Teams";
import Media from "../media/Media";
import Career from "../career/Career";




Modal.setAppElement("#root");

const Pages = () => {
  useEffect(() => {
    setOpen(true);
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="pages-container font-roboto">
      <>
        <Dialog
          open={open}
          handler={handleOpen}
          dismiss={{ outsidePress: false, enabled: true, escapeKey: false }}
          className=" shadow-none"
        >
          <DialogHeader className="flex justify-center gap-7 pt-2">
            DISCLAIMER
          </DialogHeader>
          <hr className="mt-2 mb-4 max-w-full" />
          <DialogBody className="text-justify">
            Please note that the issue is for Private Circulation only. While
            every effort has been taken to avoid errors or omissions in this
            publication, any mistake or omission that may have crept in is not
            intentional. It is suggested that to avoid any doubt the reader
            should cross-check all the facts, laws and contents of the
            publication with the original Government publication or notification
            or any other concerned original document. It is notified that
            neither the publisher nor the author or seller will be responsible
            for any damage or action to anyone, of any kind in any manner,
            thereon.
          </DialogBody>
          <hr className="mt-2 mb-4 max-w-full" />
          <DialogFooter className="flex justify-center gap-7 pt-2">
            <div>
              <Button
                className=" shadow-none rounded-none  bg-[#c9b38c] text-[#fff]  "
                onClick={handleOpen}
              >
                <span>I Agree</span>
              </Button>
            </div>
          </DialogFooter>
        </Dialog>
      </>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={aboutUs} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/Teams" component={Teams} />
          <Route exact path="/Media" component={Media} />
          <Route exact path="/Career" component={Career} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Pages;
