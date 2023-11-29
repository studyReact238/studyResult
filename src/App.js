// src/App.js
import React, { useState } from 'react';
import ContentList from './components/ContentList';
import ContentDetail from './components/ContentDetail';
import './App.css'; // CSS ファイルを読み込み
import { contentsData } from './components/contentData';

const App = () => {
    const [contents, setContents] = useState(contentsData);
    const [selectedContent, setSelectedContent] = useState(null);

    const handleContentClick = (contentId) => {
        const selected = contents.find((content) => content.id === contentId);
        setSelectedContent(selected);
    };

    return (
        <div className="App">
            <ContentList contents={contents} onContentClick={handleContentClick} />
            <ContentDetail content={selectedContent} />
        </div>
    );
};

export default App;
