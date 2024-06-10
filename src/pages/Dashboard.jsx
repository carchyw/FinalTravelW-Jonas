// import Heading from "../ui/Heading";
// import Row from "../ui/Row";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    // <Row type="horizontal">
    //   <Heading as="h1">Dashboard</Heading>
    //   <p>TEST</p>
    // </Row>
    <ul>
      <li>
        <Link to = "timer">timer</Link>
      </li>
      <li>
        <Link to = "stopwatch">stopwatch</Link>
      </li>
      <li>
        <Link to = "countup">countup</Link>
      </li>
    </ul>
  );
}

export default Dashboard;
