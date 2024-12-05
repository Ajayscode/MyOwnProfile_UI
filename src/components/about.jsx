import classes from "./about.module.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import OrgLayout from "../content/OrgLayout";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSelector, useDispatch } from "react-redux";
// import { aboutActions } from "../util/aboutSlice";
import Popup from "../content/PopupLayout";
import Input from "../content/input";
import FormContainer from "../content/FormComp";
import { handleSummaryEditThunk, handleOrgAddThunk } from "../util/aboutSlice";

export default function About() {
  const aboutInfo = useSelector((state) => state.aboutSlice);
  const dispatch = useDispatch();

  return (
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
                <FormContainer>
                  <Input
                    label={"summary"}
                    value={aboutInfo.summary}
                    placeholder={"enter text"}
                    type={"textarea"}
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
            <FormContainer>
              <Input
                label={"Organization Name"}
                type="text"
                placeholder={"Enter Text"}
              />
              <Input label={"From"} type="date" />
              <Input label="To" type="date" />
              <Input
                label="Highlights"
                type="textarea"
                placeholder={"Enter Key Notes"}
              />
            </FormContainer>
          </Popup>
        )}
        <OrgLayout
          name={"test"}
          from={"2023-09-09"}
          to={"2024-10-09"}
          keypoints={["test", "rest", "test2", "test", "rest", "test2"]}
        />
        <OrgLayout
          name={"test"}
          from={"2023-09-09"}
          to={"2024-10-09"}
          keypoints={["test", "rest", "test2", "test", "rest", "test2"]}
        />
        <OrgLayout
          name={"test"}
          from={"2023-09-09"}
          to={"2024-10-09"}
          keypoints={["test", "rest", "test2", "test", "rest", "test2"]}
        />
      </div>
    </div>
  );
}
