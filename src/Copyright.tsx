
export const CopyrightApp  = () => {
    const year = "1987 - " + new Date().getFullYear()
  
    return (
      <>
        <div id="header">
           <p>Copyright &copy; {year} Chinese Cooking Tougen Home Page All Rights Reserved.</p>
        </div>

        <table>
            <tbody>
                <tr>
                    <td><a href="https://twitter.com/share" className="twitter-share-button" data-url="http://tougentougen.web.fc2.com/index.html"
                        data-text="王子神谷のチャイナレストラン！桃源（とうげん）" data-via="tougentougen" data-lang="ja">ツイートする</a>
                    </td>
                    <td>
                        <div className="fb-like" data-href="http://tougentougen.web.fc2.com/index.html" data-send="true" data-width="500"
                        data-show-faces="true"></div>
                    </td>
                </tr>
            </tbody>
		</table>
      </>
    )
  }


			
			