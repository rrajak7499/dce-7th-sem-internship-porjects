import React from "react";

function Home() {
	const link = "https://henok.us";
	const target = "_blank";

	return (
		
		<section class="hero-section min-vh-100 d-flex justify-content-center align-items-center">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h1>Welcome to My CRUD Page</h1>
        <p>"Welcome to My CRUD Page" is a simple and concise message that introduces users to a CRUD (Create, Read, Update, Delete) page. CRUD operations are commonly used in software development to manage data in a persistent storage system.</p>
        <a href="cruds/new" to="cruds/new" class="btn btn-primary t-10">Create Note</a>
      </div>
      <div class="col-lg-6">
        <img src="https://laravelarticle.com/filemanager/uploads/laravel-6-crud-example.png" alt="Image" class="img-fluid"/>
      </div>
    </div>
  </div>
</section>


	);
}

export default Home;
