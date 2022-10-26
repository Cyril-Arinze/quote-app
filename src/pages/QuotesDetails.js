import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
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
function QuotesDetails() {
  const param = useParams();
  const match = useRouteMatch();

  const quote = dummyQuote.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuotesDetails;
