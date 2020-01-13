import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../components/Header';

import {
  fetchPerson,
} from '../../actions/personActions';

import './styles.css';

class Person extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.fetchPerson(username);
  }

  render() {
    const { person, error } = this.props;
    return (
      <div className="app">
        <main className="app-main">
          <Header backOption={true} />
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col xs={3} md={2}>
                    <img 
                      src={person.avatar_url}
                      className="rounded-circle img-fluid"
                      style={{maxHeight: '100px'}}
                      alt="avatar"
                    />
                  </Col>
                  <Col xs={9} md={10}>
                    <p className="person-name">{person.name}</p>
                    <p className="person-location">{person.location}</p>
                    <hr />
                  </Col>
                </Row>
              </Col>
              {error && <span className="error">An error has occurred</span>}
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

Person.propTypes = {
  person: PropTypes.shape({}),
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  person: state.personReducer.person,
  error: state.personReducer.error,
})

const mapDispatchToProps = dispatch => (dispatch) => ({
  fetchPerson: (username) => dispatch(fetchPerson(username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);