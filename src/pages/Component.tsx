import { Link } from "react-router-dom";

const Component = () => {
  return (
    <div>
      <h1>コンポーネント</h1>
      <ul>
        <li><Link to="/component/button">ボタン</Link></li>
      </ul>
    </div>
  );
};

export default Component;