const ContentDetail = ({ content }) => {
  if (!content) {
    return (
      <div className="content-detail">
        <h1><span>00</span>React学習まとめ</h1>
        ふみやが学んだことを残します。<br/>
        自分の言葉で書いてたり、どっかのコピペだったりします。
      </div>
    );
  };

  // idの0埋め
  const zoroPadNum = ("00" + `${content.id}`).slice(-2);

  return (
    <div className="content-detail">
      <h1>
        <span>{zoroPadNum}</span>
        {content.title}
      </h1>
      <p>{content.body}</p>
    </div>
  );
};

export default ContentDetail;
