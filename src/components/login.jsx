import logo from "./../assets/tomato.svg";
import classes from "./login.module.css";
import Input from "../content/input";
import logo_2 from "./../assets/tomato_smashed.svg";
import { useState } from "react";
import Button from "../content/button";
export default function Login() {
  const [lgo, setlogo] = useState(logo);

  function changelogo() {
    setlogo(logo_2);
  }
  return (
    <>
      <form type="submit" className={`${classes.form}`}>
        <div className={classes.head}>
          <div className={classes.logo}>
            <img src={lgo} onMouseOver={changelogo} />
            <h3>TOMATO</h3>
          </div>
          <Input label={"username"} placeholder={"Enter Text"} type="text" />
          <Input
            label={"password"}
            placeholder={"Enter safe code"}
            type="password"
          />
        </div>
        <Button type="submit" label="Submit" level={1} />
        <Button type="reset" label="Cancel" level={0} />
      </form>
    </>
  );
}
