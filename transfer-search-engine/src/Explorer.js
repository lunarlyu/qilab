import React, { useState } from 'react';

const Explorer = ({ data }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (item) => {
    setOpenItem(item.children ? item : null);
  };

  const renderItem = (item) => (
    <div key={item.id} className="item" onClick={() => handleItemClick(item)}>
      {/* Display item name with an icon based on its type */}
      {item.type === 'folder' && <i className="fa fa-folder"></i>}
      {item.type === 'file' && <i className="fa fa-file"></i>}
      <span className="item-name">{item.name}</span>
      {/* Conditionally display nested item count if available */}
      {item.children && (
        <span className="item-count">({item.children.length})</span>
      )}
      {/* Recursively render nested items if present */}
      {item.children && openItem === item && (
        <ul className="nested-list">
          {item.children.map(renderItem)}
        </ul>
      )}
      {/* Render genes if present in the item */}
    {item.genes && (
      <ul className="nested-list">
        {item.genes.map(gene => (
          <li key={gene} className="gene-item">
            <i className="fa fa-dna"></i> {gene}
          </li>
        ))}
      </ul>
    )}
    </div>
  );

  return (
    <div className="explorer">
      <ul className="explorer-list">
        {data.map(renderItem)}
      </ul>
    </div>
  );
};

export default Explorer;