import { Outlet } from "react-router-dom"
function Users({ setDrafts }) {
  return (
    <section className="py-4">
      <Outlet context={{ setDrafts }}/>
    </section>
  )
}
export default Users