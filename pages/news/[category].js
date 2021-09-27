import { useRouter } from "next/router";
import NewsItem from "../../components/NewsItem";

export async function getServerSideProps(context) {
	const { params } = context;
	const { category } = params;
	console.log(params)
	let url = `https://newsapi.org/v2/top-headlines?country=us&
	category=${category}&apiKey=29bcb89ef0cf4767a929c6b98dd1f7d6`;
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
	return (
		<div className="lg:container lg:mx-auto">
			<h2 className="text-center text-xl font-medium mt-3">Top Headings {category}</h2>
{console.log(data.articles)}
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
