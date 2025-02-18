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
        <li><Link to="/component/switch">スイッチ</Link></li>
        <li><Link to="/component/textfield">テキストフィールド</Link></li>
        <li><Link to="/component/tooltip">ツールチップ</Link></li>
        <li><Link to="/component/table">テーブル</Link></li>
        <li><Link to="/component/pagination">ページネーション</Link></li>
        <li><Link to="/component/modal">モーダル</Link></li>
        <li><Link to="/component/dialog">ダイアログ</Link></li>
        <li><Link to="/component/accordion">アコーディオン</Link></li>
        <li><Link to="/component/card">カード</Link></li>
        <li><Link to="/component/menu">メニュー</Link></li>
        <li><Link to="/component/spinner">スピナー</Link></li>
      </ul>
    </div>
  );
};

export default Component;