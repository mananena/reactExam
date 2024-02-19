import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';

interface dataSource {
  key: string;
  name?: string;
  age?: number;
  address?: string;
  tags?: string[];
}

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function App() {


  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
}

export default App;
