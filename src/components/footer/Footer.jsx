import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="footer  light-background">
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">Deep Learning</strong>
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by{" "}
          <Link href="https://github.com/abubakkerdev">Md.Abubakker Siddik</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
