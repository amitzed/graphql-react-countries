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
      _id
    }
  }
`;

const Flag = ({ flag: { emoji, svgFile, country: { name, capital, population }, _id } }) => (
  <Fragment>
    <h3>{emoji}</h3>
  </Fragment>
)

const App = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if(loading) return (
    <h1>Loading...</h1>
  )

  if(error) return (
    <h1>Something Went Wrong...</h1>
  )

  return (
    <div className="container">
      <div className="row">
        <div className="jumbotron text-center jumbotron-wrapper">
          <h1>Countries of the World</h1>
          <p>
            <a className="btn btn-primary btn-lg" href="https://www.nationsonline.org/oneworld/countries_of_the_world.htm" target="_blank" role="button">Learn More</a>
          </p>
        </div>
        {data.Flag.map((flag, index) => (
          <Flag key={index} flag={flag} />
        ))}
      </div>
    </div>
  );
}

export default App;
