import styles from "./App.module.css";
import "./App.module.css";
import { books, courses, blogs } from "./Components/Details";
import { BlogDisplay, BookDisplay, CourseDisplay } from "./Components/Display";

function App() {

  const bookdet = <BookDisplay books={books} />
  const content = <BlogDisplay blogs={blogs} />
  const coursedet = <CourseDisplay courses={courses} />

  return (
    <div className="App">
      <div className={styles.container}>
        <div className={styles.mystyle1}>
          <h1>Course Details</h1>
          {coursedet}
        </div>
        <div className={styles.st2}>
          <h1>Book Details</h1>
          {bookdet}
        </div>
        <div className={styles.v1}>
          <h1>Blog Details</h1>
          {content}
        </div>
      </div>
    </div>
  );
}

export default App;