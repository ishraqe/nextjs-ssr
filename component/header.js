import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";

const header = props => {
  return (
    <nav className="nav">
      <span className="nav__logo">logo</span>
      <div className="nav__button-container">
        <Link as={`/login`} href={`/auth/login`}>
          <button className="button">login</button>
        </Link>
        <Link as={`/register`} href={`/auth/register`}>
          <button className="button">register</button>
        </Link>
      </div>
    </nav>
  );
};

export default withRouter(header);
