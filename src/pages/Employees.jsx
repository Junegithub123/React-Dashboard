import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, ContextMenu, Filter, Sort, Page, Search, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesGrid, employeesData, contextMenuItems } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
        //allowExcelExport
        //allowPdfExport
        //contextMenuItems={contextMenuItems}
        //editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
};

export default Employees