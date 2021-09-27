import Image from "next/image";

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<Image src={imageUrl ? imageUrl : ""} alt="News Picture" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title ? title.slice(0, 40) + "..." : ""}</div>
				<p className="text-gray-700 text-base">
					{description ? description.slice(0, 80) + "..." : description}
				</p>
			</div>
			<div className="p-4 border-t text-xs text-gray-700">
				<span className="flex items-center mb-1">
					<i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
					{new Date(date).toGMTString()}
				</span>
				<span className="flex items-center">
					<i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
					{author ? author : "Unknown"}
				</span>
			</div>
		</div>
	);
};

export default NewsItem;

{
	/* 
		<div className="my-3 newsItem__container">
			<div className="card">
				<img src={imageUrl ? imageUrl : ""} className="card-img-top" alt="news" />
				<div className="card-body">
					<h5 className="card-title">{title ? title.slice(0, 40) + "..." : ""}</h5>
					<p className="card-text">
						
					</p>
					<p className="card-text">
						<small className="text-muted">
							By &nbsp;
							{author ? author : "nknown"} &nbsp;on &nbsp; {new Date(date).toGMTString()}
						</small>
					</p>
					<a href={newsUrl} className="btn btn-sm btn-dark">
						Read More
					</a>
				</div>
			</div>
		</div> */
}
