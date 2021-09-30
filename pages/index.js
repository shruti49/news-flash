import NewsItem from "../components/NewsItem";
import PropTypes from "prop-types";

export const getStaticProps = async () => {
	let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=29bcb89ef0cf4767a929c6b98dd1f7d6`;
	const res = await fetch(url);
	const data = await res.json();
	return {
		props: { data },
	};
};

const Home = ({ data }) => {
	return (
		<>
			<div className="lg:container lg:mx-auto">
				<h2 className="text-center text-xl font-medium pt-20">Top Headings </h2>
				<div className="grid grid-cols-3 gap-6 my-6">
					{data.articles.map((article) => (
						<NewsItem
							title={article.title}
							description={article.description}
							imageUrl={article.urlToImage}
							newsUrl={article.url}
							author={article.author}
							date={article.publishedAt}
							key={article.url}
							source={article.source.name}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;

Home.defaultProps = {
	noOfArticles: 14,
	country: "in",
	category: "general",
};

Home.propTypes = {
	noOfArticles: PropTypes.number,
	country: PropTypes.string,
	category: PropTypes.string,
};
