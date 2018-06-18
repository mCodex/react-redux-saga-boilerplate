import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';

import { getUsersSaga } from '../../actions';

import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this);
  }

  handleBtnOnClick() {
    this.props.getUsersSaga();
  }

  render() {
    const { users } = this.props;
    return (
      <div style={styles.container}>
        {users.length > 0 &&
          <Table
            striped
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Website</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map(({
                 id,
                 name,
                 email,
                 phone,
                 username,
                 website
              }, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{phone}</Table.Cell>
                  <Table.Cell>{website}</Table.Cell>
                </Table.Row>))}
            </Table.Body>
          </Table>
        }
        <Button
          color="teal"
          onClick={this.handleBtnOnClick}
        >
          Load Users
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
  getUsersSaga: () =>
    dispatch(getUsersSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
