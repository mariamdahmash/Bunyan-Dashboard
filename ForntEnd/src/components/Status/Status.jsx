import CardStatus from "../UI/CardStatus/CardStatus"

 function Status() {
  return (
    <>
        <section>
            <div className="container py-4">
                <div className="row">

                    <div className="col-12 col-md-3">
                        <CardStatus icon="fa-building" count="120" title="Projects"/>
                    </div>

                    <div className="col-12 col-md-3">
                        <CardStatus icon="fa-user" count="150" title="Users"/>
                    </div>

                    <div className="col-12 col-md-3">
                        <CardStatus icon="fa-laptop-code" count="170" title="Developers"/>
                    </div>

                    <div className="col-12 col-md-3">
                        <CardStatus icon="fa-blog" count="200" title="Blogs"/>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}
export default Status