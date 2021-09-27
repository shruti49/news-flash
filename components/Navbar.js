import Link from "next/link";

const Navbar = ({ title }) => {
	return (
		<div className="fixed w-full">
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>

								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<Link href="/">
									<a className="navbar-brand text-white">{title}</a>
								</Link>
							</div>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4">
									<Link href="/about">
										<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
											About
										</a>
									</Link>
									<Link href="/news/science">
										<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
											Science
										</a>
									</Link>
									<Link href="/news/health">
										<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
											Health
										</a>
									</Link>
								</div>
							</div>
						</div>{" "}
					</div>
				</div>
				<div className="sm:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a
							href="#"
							className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
							aria-current="page"
						>
							Dashboard
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Team
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Projects
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Calendar
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

{
	/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link href="/home">
					<a className="navbar-brand">{title}</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link href="/about">
								<a className="nav-link">About</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/business">
								<a className="nav-link"> Business</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/science">
								<a className="nav-link"> Science</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/entertainment">
								<a className="nav-link"> Entertainment</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/health">
								<a className="nav-link"> Health</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>*/
}
