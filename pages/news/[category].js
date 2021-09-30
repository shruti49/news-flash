import NewsItem from "../../components/NewsItem";
import { useState } from "react";

export async function getServerSideProps(context) {
	try {
		const { params } = context;
		const { category } = params;
		let noOfArticles = 14;
		let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.APIKEY}&pageSize=${noOfArticles}`;
		const res = await fetch(url);
		if (res.status !== 200) {
			throw new Error("Failed to fetch");
		}
		const data = await res.json();
	} catch (err) {
		data = { error: { message: err.message } };
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
		if (text !== "" || text !== null) {
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
			text = arr.toString();
			return text.replaceAll(",", "");
		}
	};
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
