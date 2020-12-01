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
    <div className="col-sm-6 col-md-4 thumbnail-wrapper">
      <div className="thumbnail">
        <div className="caption">
          <h3>{name}</h3>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p>Flag: {emoji}</p>
        </div>
      </div>
    </div>
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
