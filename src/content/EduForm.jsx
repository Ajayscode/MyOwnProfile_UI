/* eslint-disable react/prop-types */
import Input from "./input";
import FormContainer from "./FormComp";
import { EduActions } from "../util/eduSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function EduForm({
  name = 0,
  duration = { from: "", to: "" },
  grade = "",
  degree = "",
}) {
  const [current, setCurrent] = useState({
    name: name,
    from: duration.from,
    to: duration.to,
    grade: grade,
    degree: degree,
  });
  const dispatch = useDispatch();

  function handleChanges(e, type) {
    switch (type) {
      case "name":
        setCurrent((prev) => {
          return { ...prev, name: e.target.value };
        });
        break;
      case "from":
        setCurrent((prev) => {
          return { ...prev, from: e.target.value };
        });
        break;
      case "to":
        setCurrent((prev) => {
          return { ...prev, to: e.target.value };
        });
        break;
      case "degree":
        setCurrent((prev) => {
          return { ...prev, degree: e.target.value };
        });
        break;
      case "grade":
        setCurrent((prev) => {
          return { ...prev, grade: e.target.value };
        });
    }
  }

  function handleClose() {
    dispatch(EduActions.handleToogle());
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: current.name,
      degree: current.degree,
      grade: current.grade,
      duration: { from: current.from, to: current.to },
    };
    dispatch(EduActions.handlesubmit(data));
    dispatch(EduActions.handleToogle());
  }
  return (
    <FormContainer actions={{ submit: handleSubmit, close: handleClose }}>
      <Input
        label={"Institute"}
        placeholder="Enter Text"
        value={name || ""}
        func={(e) => handleChanges(e, "name")}
      />
      <Input
        label={"From"}
        placeholder="Enter Date"
        value={duration.from || ""}
        type="month"
        func={(e) => handleChanges(e, "from")}
      />
      <Input
        label={"To"}
        placeholder="Enter Date"
        value={duration.to || ""}
        type="month"
        func={(e) => handleChanges(e, "to")}
      />
      <Input
        label={"Grade"}
        placeholder="enter text"
        value={grade || ""}
        type="number"
        func={(e) => handleChanges(e, "grade")}
      />
      <Input
        label={"Degree"}
        placeholder="Enter Text"
        value={degree || ""}
        func={(e) => handleChanges(e, "degree")}
      />
    </FormContainer>
  );
}
