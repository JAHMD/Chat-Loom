import React from "react";
import DesktopSidebar from "./desktop-sidebar";
import MoblieFooter from "./mobile-footer";

type Props = {};

const Sidebar = () => {
	return (
		<>
			<DesktopSidebar />
			<MoblieFooter />
		</>
	);
};

export default Sidebar;
