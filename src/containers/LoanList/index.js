// Libraries
import React from 'react'

import Header from '../../components/Header'
import Table from '../../components/Table'
import Detail from '../../components/Detail'
import data from '../../data'

class LoanList extends React.Component {
    constructor() {
        super();
        this.state = {
          showTable: true
        }
    }

    handleDetailInfo () {
        this.setState({show: false});
    };

    render () {
      return (
        <React.Fragment>
            <Header title="Listado de Préstamos" />
            {this.state.showTable ? <Table data={data} detailInfo={this.handleDetailInfo} /> : <Detail />}
            
            
        </React.Fragment>
    );
}
}


export default LoanList
