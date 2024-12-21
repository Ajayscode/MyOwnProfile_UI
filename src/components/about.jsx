import classes from "./about.module.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import OrgLayout from "../content/OrgLayout";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSelector, useDispatch } from "react-redux";
import Popup from "../content/PopupLayout";
import Input from "../content/input";
import FormContainer from "../content/FormComp";
import { handleSummaryEditThunk, handleOrgAddThunk } from "../util/aboutSlice";
import Button from "../content/button";
import { aboutActions } from "../util/aboutSlice";
import { useRef, useState } from "react";

export default function About() {
  const aboutInfo = useSelector((state) => state.aboutSlice);
  const dispatch = useDispatch();
  const Ref = useRef();
  const [orgDetails, setorgDetails] = useState({
    name: null,
    from: null,
    to: null,
    highlights: null,
  });

  function handleSummarysubmit() {
    dispatch(aboutActions.handleSummarySubmit({ summary: Ref.current.value }));
    dispatch(handleSummaryEditThunk());
  }

  function handlesummaryedit() {
    dispatch(handleSummaryEditThunk());
  }

  function handleOrgDetails(e, type) {
    switch (type) {
      case "name":
        setorgDetails((prev) => {
          return { ...prev, name: e.target.value };
        });
        break;
      case "from":
        setorgDetails((prev) => {
          return { ...prev, from: e.target.value };
        });
        break;
      case "to":
        setorgDetails((prev) => {
          return { ...prev, to: e.target.value };
        });
        break;
      case "highlights":
        setorgDetails((prev) => {
          return { ...prev, highlights: e.target.value.split("\n") };
        });
        break;
    }
  }

  function handleOrgSubmit() {
    dispatch(aboutActions.handleOrgSubmit({ ...orgDetails }));
    dispatch(handleOrgAddThunk());
  }
  return (
    <div className={classes.container}>
      <header>
        About Page
        <i>
          <Button
            label={"Add New"}
            func={() => dispatch(handleOrgAddThunk())}
          />
        </i>
      </header>
      <div className={classes.line}></div>
      <div className={classes.main__container}>
        <div className={classes.summary__container}>
          <div className={classes.profile_container}></div>
          <div className={classes.profile_text}>
            <div className={classes.header_}>
              <h2>
                Summary{" "}
                <i>
                  {
                    <ModeEditIcon
                      onClick={() => dispatch(handleSummaryEditThunk())}
                    />
                  }
                </i>
              </h2>
              {aboutInfo.isSummaryEdit && (
                <Popup>
                  <FormContainer
                    actions={{
                      submit: handleSummarysubmit,
                      close: handlesummaryedit,
                    }}
                  >
                    <Input
                      label={"summary"}
                      value={aboutInfo.summary}
                      placeholder={"enter text"}
                      type={"textarea"}
                      ref={Ref}
                    />
                  </FormContainer>
                </Popup>
              )}
            </div>
            <p>{aboutInfo.summary}</p>
          </div>
        </div>
        <div className={classes.snapshot__container}>
          <h1>
            Proffessional Snapshot{"  "}
            <i>
              <AddBoxIcon onClick={() => dispatch(handleOrgAddThunk())} />
            </i>
          </h1>
          {aboutInfo.isAddOrg && (
            <Popup>
              <FormContainer
                actions={{
                  close: () => dispatch(handleOrgAddThunk()),
                  submit: handleOrgSubmit,
                }}
              >
                <Input
                  label={"Organization Name"}
                  type="text"
                  placeholder={"Enter Text"}
                  func={(e) => handleOrgDetails(e, "name")}
                />
                <Input
                  label={"From"}
                  type="date"
                  func={(e) => handleOrgDetails(e, "from")}
                />
                <Input
                  label="To"
                  type="date"
                  func={(e) => handleOrgDetails(e, "to")}
                />
                <Input
                  label="Highlights"
                  type="textarea"
                  placeholder={"Enter Key Notes"}
                  func={(e) => handleOrgDetails(e, "highlights")}
                />
              </FormContainer>
            </Popup>
          )}
          {aboutInfo.organizations.map((ele) => {
            return (
              <OrgLayout
                key={ele.name}
                name={ele.name}
                from={ele.from}
                to={ele.to}
                keypoints={ele.highlights}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
