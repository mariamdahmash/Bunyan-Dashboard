import { Outlet } from "react-router-dom";

export default function Developer() {
  return (
    <>
          <section className="py-4">
            <Outlet/>
          </section>
    </>
  )
}
