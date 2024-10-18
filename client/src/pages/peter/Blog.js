import { useState } from "react";
import "./Blog.css";
function Blog() {
  const [show, setShow] = useState(1);
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-posts">
          {show === 1 ? (
            <BlogPost src={"b1.jpg"} alt={"a"}>
              Rapidious qntegrate distrbuted supply chains throuih marke
              position bestn practces chain marke positonn bestin practcer
              ieractvel fashon and sound qources forin iteractve fashion bestin
              practce ieractve and sound qources for.
            </BlogPost>
          ) : show === 2 ? (
            <BlogPost src={"b2.jpg"} alt={"a"}>
              Rapidious qntegrate distrbuted supply chains throuih marke
              position bestn practces chain marke positonn bestin practcer
              ieractvel fashon and sound qources forin iteractve fashion bestin
              practce ieractve and sound qources for.
            </BlogPost>
          ) : (
            <BlogPostVid />
          )}
        </div>

        <Pagination show={show} setShow={setShow} />
      </div>
    </section>
  );
}

function BlogPost({ children, src, alt }) {
  return (
    <div className="blog-post">
      <div className="post-img">
        <img src={src} alt={alt} />
      </div>
      <div className="blog-info">
        <p className="admin">By Admin March 24, 2021</p>
        <h3>
          Uompe Qrear High Ecent Nche Without Some Prinlc Uomp Without Some
          Qreari High Ecent
        </h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

function BlogPostVid() {
  return (
    <div className="blog-post">
      <div className="video-post">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/URUJD5NEXC8?si=IwHIO4xk3EoHeni2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
      <div className="blog-info">
        <p className="admin">By Admin March 24, 2021</p>
        <h3>
          Uompe Qrear High Ecent Nche Without Some Prinlc Uomp Without Some
          Qreari High Ecent
        </h3>
        <p>
          Rapidiously integrate distributed supply chains through market
          position best practices chain market position bestin prac...
        </p>
      </div>
    </div>
  );
}

function Pagination({ show, setShow }) {
  return (
    <div className="pagination">
      <p className={show === 1 ? "active" : ""} onClick={() => setShow(1)}>
        1
      </p>

      <p className={show === 2 ? "active" : ""} onClick={() => setShow(2)}>
        2
      </p>
      <p className={show === 3 ? "active" : ""} onClick={() => setShow(3)}>
        3
      </p>
    </div>
  );
}
export default Blog;
