import React, { Component } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

class Column extends Component {
  render() {
    return (
    <Container>
      <Title>{this.props.column.title}</Title>
      <TaskList>These are Tasks</TaskList>
    </Container>
    )
  }
}

export default Column;