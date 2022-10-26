import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const text = props.text.slice(0, 20);
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>
            {text + "..."}
            <Link to={`/quotes/${props.id}`}>See more..</Link>
          </p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
    </li>
  );
};

export default QuoteItem;
