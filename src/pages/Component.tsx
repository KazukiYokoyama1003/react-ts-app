import { Link } from "react-router-dom";

const Component = () => {
  return (
    <div>
      <h1>コンポーネント</h1>
      <ul>
        <li><Link to="/component/button">ボタン</Link></li>
        <li><Link to="/component/checkbox">チェックボックス</Link></li>
        <li><Link to="/component/radiobutton">ラジオボタン</Link></li>
        <li><Link to="/component/selectbox">セレクトボックス</Link></li>
      </ul>
    </div>
  );
};

export default Component;