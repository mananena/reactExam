import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ColumnsType } from 'antd/es/table';
import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataType {
  country: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Страна',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Название школы',
    dataIndex: 'name',
    key: 'name',
  }
]


function App() {

  const LIMIT_LIST_SCHOOL: number = 10

  const [dataSource, setDataSource] = useState<DataType[]>();

  const [page, setPage] = useState<number>(1);

  let offset = page * LIMIT_LIST_SCHOOL

  const getUniversity = async (page: number, limit: number, offset: number) => {
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`)
    setDataSource(response.data);
  }


  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL, offset)
  }, [offset])

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Button onClick={() => setPage(page - 1)} disabled={!offset}>Назад</Button>
      <Button onClick={() => setPage(page + 1)}>Вперед</Button>
      <span>Номер страницы: {page}</span>
    </>
  );
}

export default App;
