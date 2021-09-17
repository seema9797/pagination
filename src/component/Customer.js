import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from 'react-bootstrap-table2-paginator'; 
import { Button } from "react-bootstrap";
import axios from 'axios';
import Modal from './Modal';
const { SearchBar } = Search;

let nameFilter;
let priceFilter;
let stockFilter;
let originFilter;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter();
  };
  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      style={{
        fontSize: "16px",
        padding: "5px",
        margin: "10px",
        height: "40px"
      }}
    >
      Clear
    </Button>
  );
};

class Table extends React.Component {
    state = {  
        products: [],  
        columns: [

        {  
          dataField: 'athlete',  
          text: 'Name',  
        }, 
        {  
          dataField: 'age',  
          text: 'Age',  
          sort: true  
        },  

        {  
                dataField: 'sport',  
                text: 'Sport',  
                sort: true  
              },  
              {  
                dataField: 'country',  
                text: 'Country',  
                sort: true  
              },  
              {  
                dataField: 'date',  
                text: 'Date',  
                sort: true  
              },  
             ]  

      }  
       selectRow = {
        mode: "checkbox",
        clickToSelect: false,
        classes: "selection-row"
      };

       rowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log({ row, rowIndex });
        }
      };

      
      componentDidMount() {    
        axios.get('https://www.ag-grid.com/example-assets/olympic-winners.json').then(response => {    
          console.log(response.data);    
          this.setState({    
                products: response.data    
          });  
        });    
      }

  clearAllFilter() {
    nameFilter("");
    priceFilter("");
    originFilter("");
    stockFilter("");
  }
render() {
    const options = {  
        page: 2,   
        sizePerPageList: [ {  
          text: '15', value: 15  
        }, {  
          text: '30', value: 30  

        }, {  

          text: 'All', value: this.state.products.length  
        } ],   
        sizePerPage: 15,   
        pageStartIndex: 0,   
        paginationSize: 3,    
        prePage: 'Prev',   
        nextPage: 'Next',   
        firstPage: 'First',   
        lastPage: 'Last',   
        paginationPosition: 'top'    
      };  
    
    return (
      <div className="container">
        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={this.state.products}
          columns={this.state.columns}
          search
        >
          {props => (
            <div>
              <SearchBar
                {...props.searchProps}
                style={{ width: "400px", height: "40px" }}
              />
              <ClearButton
                {...props.searchProps}
                clearAllFilter={this.clearAllFilter}
              />
              <BootstrapTable
                {...props.baseProps}
                filter={filterFactory()}
                noDataIndication="There is no solution"
                striped
                bordered={false}
                hover
                condensed
                selectRow={this.selectRow}
                rowEvents={this.rowEvents}
                pagination={paginationFactory(options) }/> 
                <Modal/>
            </div>
            
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default Table;
