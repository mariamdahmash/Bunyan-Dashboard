import { Link } from "react-router-dom";
import style from "./TableDashbord.module.css"

export default function TableDashbord({func}) {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mb-3">
            <h3 className={`${style.header}`}>{func}</h3>
            <Link to="add" className={`${style.btn1} btn`}>Add New  {` ${func}`}</Link>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John</td>
              <td>Doe</td>
              <td>@social</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
