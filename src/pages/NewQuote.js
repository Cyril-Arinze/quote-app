import React, { useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  const addQuoteHandler = (quoteDetails) => {
    sendRequest(quoteDetails);
  };
  useEffect(() => {
    if (status === "completed") {
      history.replace("/quotes");
    }
  }, [status, history]);

  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler} isLoading={status} />
    </>
  );
}

export default NewQuote;
