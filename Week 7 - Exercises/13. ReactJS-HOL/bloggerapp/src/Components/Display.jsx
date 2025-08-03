

export function BookDisplay(props) {
    const bookdet = (
        <ul>
            {props.books.map(book => (
                <div>
                    <h3>{book.bname}</h3>
                    <h4>{book.price}</h4>
                </div>
            ))}
        </ul>
    )
    return bookdet;
}

export function BlogDisplay(props) {
    const content = (
        <ul>
            {props.blogs.map(blog => (
                <div>
                    <h3>{blog.bname}</h3>
                    <h4>{blog.author}</h4>
                    <h5>{blog.message}</h5>
                </div>
            ))}
        </ul>
    )
    return content;
}

export function CourseDisplay(props) {
    const coursedet = (
        <ul>
            {props.courses.map(course => (
                <div>
                    <h3>{course.cname}</h3>
                    <h4>{course.date}</h4>
                </div>
            ))}
        </ul>
    )
    return coursedet;
}