import NewsItem from "../../components/NewsItem";

export async function getServerSideProps(context) {
	const { params } = context;
	const { category } = params;
	let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=29bcb89ef0cf4767a929c6b98dd1f7d6`;
	const res = await fetch(url);
	const data = await res.json();
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			data,
			category,
		}, // will be passed to the page component as props
	};
}

const Category = ({ data, category }) => {
	const captialiseWord = (text) => {
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
	}
	return (
		<div className="lg:container lg:mx-auto">
			<h2 className="text-center text-xl font-medium pt-20">
				Top Headings - {captialiseWord(category)}
			</h2>
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
	);
};

export default Category;
