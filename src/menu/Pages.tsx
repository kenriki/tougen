import {useNavigate} from "react-router-dom";
import img03 from '/sake.jpg';
import img02 from '/menu20241005.jpg';
import img01 from '/newDataCover2024.jpg';

function Pages(){
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
    window.location.reload();
  };
  return (
    <div id="header">
      <h2 className="title">とうげんのメニュー</h2>
      <h3>※画像をクリックすると大きくなります</h3>
      <table>
        <tbody>
          <tr>
            <td>
                <a href={img01}>
                    <img src={img01}  width="700" height="550" className="align:center;" alt="メニュー" />
                </a>
            </td>
          </tr>
          <tr>
            <td>
                <a href={img02}>
                    <img src={img02}  width="700" height="550" className="align:center;" alt="メニュー" />
                </a>
            </td>
          </tr>
          <tr>
            <td>
            <a href={img02} download><button>桃源（とうげん）メニューのダウンロードをする。</button></a>
            </td>
          </tr>
          <tr>
            <td>
                <a href={img03}>
                    <img src={img03}  width="700" height="550" className="align:center;" alt="メニュー" />
                </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a href="http://form1.fc2.com/form/?id=879114" title="問い合わせする"><button>サイト管理者へ問い合わす</button></a><br></br><br></br>
      <button onClick={goToHome}>最上部へ</button>
    </div>
  )
}

export default Pages
