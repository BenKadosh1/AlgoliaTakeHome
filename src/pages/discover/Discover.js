import algoliasearch from "algoliasearch";
import React, { Component } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";
import "./DiscoverSearch.css";
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

        <div className="ais-InstantSearch">
          <h1 className="headerTitle">
            <strong>Discover the perfect movie for you!</strong>
          </h1>
          <InstantSearch
            indexName="movies_discover"
            searchClient={searchClient}
          >
            <div className="left-panel">
              <MediaQuery maxDeviceWidth={812}>
                <SearchBox />
              </MediaQuery>
              <ClearRefinements />
              <h2>Genre</h2>
              <RefinementList attribute="genre" />
              <h2>Rating</h2>
              <RefinementList attribute="rating" />
              <MediaQuery minDeviceWidth={1200}>
                <Configure hitsPerPage={12} />
              </MediaQuery>
              <MediaQuery maxDeviceWidth={812}>
                <Configure hitsPerPage={6} />
              </MediaQuery>
            </div>
            <div className="right-panel">
              <MediaQuery minDeviceWidth={1200}>
                <SearchBox />
              </MediaQuery>
              <Hits hitComponent={Hit} />
              <Pagination />
            </div>
          </InstantSearch>
        </div>
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
