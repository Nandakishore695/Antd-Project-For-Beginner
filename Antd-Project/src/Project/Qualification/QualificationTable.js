import {Table } from 'antd';
import React, { useState } from 'react';

const columns = [
  {
    title: 'Degree',
    dataIndex: 'btech',
  },
  {
    title: 'B.Tech',
    dataIndex: 'degree',
  }
];
const data = [];

for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const GridTable = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={props.data} style={{width:"200px"}} />
    </div>
  );
};

export default GridTable;