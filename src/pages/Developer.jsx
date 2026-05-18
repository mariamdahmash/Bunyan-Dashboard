import { Outlet } from "react-router-dom";

function Developer({ setDrafts }) {
  return (
    <>
          <section className="py-4">
            <Outlet context={{ setDrafts }}/>
          </section>
    </>
  )
}
export default Developer