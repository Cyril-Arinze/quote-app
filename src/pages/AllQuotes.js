import React, { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const dummyQuote = [
  {
    id: "Q1",
    author: "Cyril Arinze",
    text: "Javascript go show you shege",
  },
  {
    id: "Q2",
    author: "Cyril Arinze",
    text: "I repeat Javascript go show you shege",
  },
  {
    id: "Q3",
    author: "Cyril Arinze",
    text: "Make i sha learn am, all die na die",
  },
];

function AllQuotes() {
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
  if (!loadedQuote) {
    return (
      <div className="centered">
        <NoQuotesFound />
      </div>
    );
  }
  return <QuoteList quotes={loadedQuote || []} />;
}

export default AllQuotes;
