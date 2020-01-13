import React from 'react';

import Header from '../../components/Header';

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];
  return (
    <div className="app">
      <main className="app-main">
        <Header />
        <Container>
          <Row>
            <Col>
              <h2>Top 5 GitHub Users</h2>
              <p>Tap the username to see more information</p>
              {topFive.map((name, index) => {
                return (
                  <Link key={index} to={`/person/${name}`}>
                    <Button variant="primary" style={{margin: '5px'}}>{name}</Button>
                  </Link>
                );
              })}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;