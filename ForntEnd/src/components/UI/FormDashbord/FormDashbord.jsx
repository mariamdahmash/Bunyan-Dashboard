import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import style from "./FormDashbord.module.css"
export default function FormDashbord({ type }) {

  const { setDrafts } = useOutletContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {

    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(updatedData);

    // check if any input has value
    const hasData = Object.values(updatedData).some(
      (value) => value.trim() !== ""
    );

    setDrafts((prev) => ({
      ...prev,
      [type]: hasData,
    }));
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <Link to="/" type="submit" className={`${style.btn1} btn `}>
            Submit
          </Link>
        </form>
      </div>
    </>
  );
}
