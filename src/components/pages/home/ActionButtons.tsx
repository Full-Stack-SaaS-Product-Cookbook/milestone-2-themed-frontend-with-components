import { Link } from 'gatsby';
import * as React from 'react';

export function ActionButtons() {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-outline-primary m-3">Generate!</button>
      <Link to="/app" className="btn btn-primary m-3">Try Full App</Link>
    </div>
  );
}
