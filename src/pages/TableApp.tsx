import { ColumnsType } from 'antd/es/table';
import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

//TODO: Перенести в отдельный файл
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
  },
];

const TableApp = () => {

  const LIMIT_LIST_SCHOOL: number = 10

  const [dataSource, setDataSource] = useState<DataType[]>();

  const [page, setPage] = useState<number>(0);

  let offset = page * LIMIT_LIST_SCHOOL

  const getUniversity = async (limit: number, offset: number) => {
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`)
    setDataSource(response.data);
  }


  useEffect(() => {
    getUniversity(LIMIT_LIST_SCHOOL, offset)
  }, [offset])

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Button onClick={() => setPage(page - 1)} disabled={!offset}>Назад</Button>
      <Button onClick={() => setPage(page + 1)}>Вперед</Button>
      <span>Номер страницы: {page + 1}</span>
    </>
  );
}

export default TableApp;