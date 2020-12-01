import React, { Component, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_COUNTRIES = gql`
  query {
    Flag {
      emoji
      svgFile
      country {
        name
        capital
        population
      }
    }
  }
`;

const Flag = ({ flag: { emoji, svgFile, country: { name, capital, population } } }) => (
  <Fragment>
    Test
  </Fragment>
)

const App = () => {
  return (
    <div>
      App
    </div>
  );
}

export default App;
