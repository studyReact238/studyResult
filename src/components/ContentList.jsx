const ContentList = ({ contents, onContentClick }) => {
  return (
    <div className="content-list">
      <h2>Contents</h2>
      <ul>
        {contents.map((content) => (
          <li key={content.id} onClick={() => onContentClick(content.id)}>
            {content.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
