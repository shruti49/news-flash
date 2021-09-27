import Spinner from "../pages/Spinner";
import NewsItem from "../pages/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pageNo, setPageNo] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const [progress, setProgress] = useState(0);

	const capitalizeText = (text) => {
		let text1 = text.toLowerCase();
		var arr = [];
		arr.push(text1[0].toUpperCase());
		for (var j = 1; j < text1.length; j++) {
			if (text1[j - 1] === " " || text1[j - 1] === "\n") {
				arr.push(text1[j].toUpperCase());
			} else {
				arr.push(text1[j]);
			}
		}

		return arr.toString().replaceAll(",", "");
	};

	// 	document.title = `News Flash - ${capitalizeText(props.category)}`;
	// }

	const fetchData = async () => {
		setProgress(10);
		let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.noOfArticles}`;
		setLoading(true);
		setProgress(30);
		let data = await fetch(url);
		let parseData = await data.json();
		setProgress(70);
		setArticles(parseData.articles);
		setTotalResults(parseData.totalResults);
		setLoading(false);
		setProgress(100);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleNextClick = async (e) => {
		setPageNo(pageNo++);
		fetchData();
	};

	const handlePrevClick = async (e) => {
		setPageNo(pageNo--);
		fetchData();
	};

	const fetchMoreData = async () => {
		setPageNo(pageNo++);
		let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.noOfArticles}`;
		let data = await fetch(url);
		let parseData = await data.json();
		setArticles(articles.concat(parseData.articles));
		setTotalResults(parseData.totalResults);
	};

	return (
		<>
			<h2 className="text-center my-3">Top Headings {`(${capitalizeText(category)})`}</h2>
			{loading && <Spinner />}

			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Spinner />}
				style={{ overflow: "hidden" }}
			>
				<div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
					{articles.map((article) => (
						<NewsItem
							title={article.title}
							description={article.description}
							imageUrl={article.urlToImage}
							newsUrl={article.url}
							author={article.author}
							date={article.publishedAt}
							key={article.url}
						/>
					))}
				</div>
			</InfiniteScroll>
			{/* <div className="d-flex justify-content-between">
					<button
						type="button"
						className="btn btn-dark"
						disabled={pageNo <= 1}
						onClick={handlePrevClick}
					>
						Previous
					</button>
					<button
						type="button"
						className="btn btn-dark"
						disabled={
							pageNo + 1 > Math.ceil(totalResults / props.noOfArticles)
						}
						onClick={handleNextClick}
					>
						Next
					</button>
					</div>*/}
		</>
	);
};

export default News;

News.defaultProps = {
	noOfArticles: 14,
	country: "in",
	category: "general",
};

News.propTypes = {
	noOfArticles: PropTypes.number,
	country: PropTypes.string,
	category: PropTypes.string,
};
