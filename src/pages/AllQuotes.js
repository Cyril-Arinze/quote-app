import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

function AllQuotes() {
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return <div className="centered focused">{error}</div>;
  }
  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return (
      <div className="centered">
        <NoQuotesFound />
      </div>
    );
  }
  return (
    <>
      <QuoteList quotes={loadedQuote} />
      <Route path={`${match.url}/*`}>
        <p>Alaye, shift jhor</p>
      </Route>
    </>
  );
}

export default AllQuotes;
