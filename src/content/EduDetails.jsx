import classes from "./../components/Education.module.css";
import EduContent from "./Educontent";
import EduForm from "./EduForm";
import Popup from "./PopupLayout";
import { useSelector, useDispatch } from "react-redux";
import { EduActions } from "../util/eduSlice";

export default function EduDetails() {
  const Edu = useSelector((state) => state.EduSlice.details);
  const isEdit = useSelector((state) => state.EduSlice.isEdit);
  const current = useSelector((state) => state.EduSlice.currentSelection);
  const dispatch = useDispatch();
  function handleEduEdit(e, id) {
    dispatch(EduActions.handleEdit({ id: id }));
    dispatch(EduActions.handleToogle());
  }

  return (
    <div className={classes.edubox}>
      <ol>
        {Edu.map((ele, index) => {
          return (
            <li key={index}>
              <EduContent
                name={ele.name}
                duration={ele.duration}
                grade={ele.grade}
                degree={ele.degree}
                func={(e) => handleEduEdit(e, index)}
              />
            </li>
          );
        })}
        {isEdit && (
          <Popup>
            <EduForm
              name={current !== null ? Edu[current].name : ""}
              duration={current !== null ? Edu[current].duration : ""}
              grade={current !== null ? Edu[current].grade : ""}
              degree={current !== null ? Edu[current].degree : ""}
            />
          </Popup>
        )}
      </ol>
    </div>
  );
}
