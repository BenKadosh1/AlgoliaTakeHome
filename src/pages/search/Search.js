import algoliasearch from "algoliasearch";
import React, { Component } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  Configure,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";
import "../discover/DiscoverSearch.css";
import Navbar from "../../components/navbar/Navbar";
import MediaQuery from "react-responsive";

const searchClient = algoliasearch(
  "XTP58KH4GE",
  "b00d93cc19c8253708b88d3c0bab04ea" // search only API key, not admin API key
);

class Search extends Component {
  render() {
    return (
      <div className="PageContainer">
        <Navbar />
        <div className="spacer"></div>

        <MediaQuery minDeviceWidth={1200}>
          <div className="ais-InstantSearch">
            <h1 className="headerTitle">
              <strong>Search for all of your favorite movies!</strong>
            </h1>
            <InstantSearch
              indexName="movies_search"
              searchClient={searchClient}
            >
              <div className="main-panel">
                <SearchBox />
                <Hits hitComponent={Hit} />
                <Pagination />
                <Configure hitsPerPage={12} />
              </div>
            </InstantSearch>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={812}>
          <div className="ais-InstantSearch">
            <h1 className="headerTitle">
              <strong>Search for all of your favorite movies!</strong>
            </h1>
            <InstantSearch
              indexName="movies_search"
              searchClient={searchClient}
            >
              <div className="main-panel">
                <SearchBox />
                <Hits hitComponent={Hit} />
                <Pagination />
                <Configure hitsPerPage={6} />
              </div>
            </InstantSearch>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <img
        src={`https://source.unsplash.com/250x150/?${props.hit.title} movie`}
        align="left"
        alt={props.hit.title}
      />
      <div className="hit-item">
        <strong>Title:</strong> <Highlight attribute="title" hit={props.hit} />
      </div>
      <div className="hit-item">
        <strong>Genre(s):</strong>{" "}
        <Highlight attribute="genre" hit={props.hit} />
      </div>
      <div className="hit-item">
        <strong>Rating:</strong> {props.hit.rating}
      </div>
      <div className="hit-item">
        <strong>Actor(s):</strong>{" "}
        <Highlight attribute="actors" hit={props.hit} />
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
