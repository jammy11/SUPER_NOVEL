import React from 'react';
import './Writer.css'; 
import Headers from '../../compronents/Pubblic_components/headerselect';
import CategoryNavWriter from '../../compronents/WriterComponents/CatogoryNavWriter';
import DetailNovelOfWriter from '../../compronents/WriterComponents/WriterPage/detailNovel/detailNovelOfWriter';
import Add_novel_button from '../../compronents/WriterComponents/WriterPage/AddNovelButton/add_novel_button';


const Writer: React.FC = () => {

  return (
    <>
      <Headers />
      <CategoryNavWriter />
      <div className='background_of_writer'>
        <Add_novel_button/>
        <DetailNovelOfWriter/>
      </div>
    </>
  );
};

export default Writer;
