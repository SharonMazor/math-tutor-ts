import React from "react";
import "./Home.css";
import homeImg from "../images/home.svg"; // כנל

const Home: React.FC = () => {
  return (
    <section className='section'>
      <div>
        <h1 className='h1'>שיעורים פרטיים במתמטיקה</h1>
        <p className='p1'>
          כאן יהיה הסבר של מה שאתה מציע בתור מורה משהו בסגנון של כמה זמן לשיעור,
          מה סוג המבנה של שיעור, עלויות, קבוצת וואטסאפ וכו זה יהיה פסקה אחת מלאה
          של טקסט שיכולה להיות מלווה גם ברשימה
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
          <br />
          <br />
          כאן יהיה הסבר של מה שאתה מציע בתור מורה משהו בסגנון של כמה זמן לשיעור,
          מה סוג המבנה של שיעור, עלויות, קבוצת וואטסאפ וכו זה יהיה פסקה אחת מלאה
          של טקסט שיכולה להיות מלווה גם ברשימה
        </p>
      </div>
      <div>
        <img src={homeImg} className='img' alt="" />
      </div>
    </section>
  );
};

export default Home;
