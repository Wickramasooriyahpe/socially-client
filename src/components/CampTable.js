import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

function CampTable(){
    const[userList, setUserList] = useState([]);

    const columns = [
        {dataField:'id', text: 'Id'},
        {dataField:'name', text: 'Name', sort:true},
        {dataField:'username', text: 'Username', sort:true},
        {dataField:'email', text: 'Email', sort:true}
    ]

    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });

      const { SearchBar, ClearSearchButton } = Search;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => setUserList(result))
        .catch(error => console.log(error));
    },[])

        return ( 
            <div>
                <ToolkitProvider
                    bootstrap4
                    keyField='id'
                    data={userList}
                    columns={columns}
                    search
                >
                    {
                        props => (
                            <React.Fragment>
                                <SearchBar {...props.searchProps} />
                                <ClearSearchButton {...props.searchProps} />
                                <hr />
                                <BootstrapTable 
                                   // bootstrap4 
                                    //keyField='id' 
                                    //columns={columns} 
                                    //data={userList}
                                    pagination={pagination}
                                    {...props.baseProps} 
                                />
                            </React.Fragment>

                        )
                    }

                </ToolkitProvider>
               
               {/*<table>
                   <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>Username</th>
                       <th>Email</th>
                   </tr>
                  {
                      userList && userList.length> 0 ?
                      userList.map(usr =>
                        <tr>
                            <td>{usr.id}</td>
                            <td>{usr.name}</td>
                            <td>{usr.username}</td>
                            <td>{usr.email}</td>
                        </tr>
                        )
                        :'Loding'
                  }
               </table>*/}
            </div>
        );
}

export default CampTable;