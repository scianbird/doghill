import Link from "next/link";
import "./components.css";
export default function Header() {
  return (
    <div className="headerDiv">
      <div className="icondiv"></div>
      <div>
        {" "}
        <p className="headerFakeLink">Log In</p>
        <p className="headerFakeLink">FAQ</p>
      </div>
    </div>
  );
}
