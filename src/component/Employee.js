import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from 'react-bootstrap-table2-paginator'; 
import { Button } from "react-bootstrap";
import axios from 'axios';
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
      Search
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
      rowStyle = (row, rowIndex) => {
        row.index = rowIndex;
        const style = {};
        if (rowIndex % 2 === 0) {
          style.backgroundColor = 'transparent';
        } else {
          style.backgroundColor = 'rgba(54, 163, 173, .10)';
        }
        style.borderTop = 'none';
    
        return style;
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
      <div className="container py-5">
        <h1>Clear search bar and filter</h1>
        <ToolkitProvider
          trClassName="table-row"
          
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
                style={{ width: "300px", height: "40px" }}
                
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
                hover
                condensed
                rowStyle={this.rowStyle}
                selectRow={this.selectRow}
                rowEvents={this.rowEvents}
                pagination={paginationFactory(options) }/> 
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default Table;
