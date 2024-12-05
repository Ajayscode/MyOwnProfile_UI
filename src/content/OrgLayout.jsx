/* eslint-disable react/prop-types */
import classes from "./OrgLayout.module.css";

export default function OrgLayout({ name, from, to, keypoints }) {
  return (
    <>
      <div className={classes.container}>
        <header>{name}</header>
        <section className={classes.date}>
          <h3>
            from: <i>{from}</i>
          </h3>
          <h3>
            to: <i>{to}</i>
          </h3>
        </section>
        <section className={classes.content}>
          <h2>Key Highlights:</h2>
          <ol>
            {keypoints.map((ele, index) => {
              return (
                <li key={index}>
                  <p>{ele}</p>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </>
  );
}
