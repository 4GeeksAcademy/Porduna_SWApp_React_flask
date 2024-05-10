import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
// import { Demo } from "./pages/demo";
// import { Single } from "./pages/single";
import { Characters } from "./pages/characters";
import { Planets } from "./pages/planets";
import { Crafts } from "./pages/crafts";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
// import { Swiper } from "./component/swiper";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					{/* <Swiper /> */}
					<Characters />
					{/* <Planets />
					<Crafts /> */}
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} /> */}
						<Route path="/characters" element={<Characters />} />
						{/* <Route path="/swiper" element={<Swiper />} /> */}
						<Route path="/planets" element={<Planets />} />
						<Route path="/crafts" element={<Crafts />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

