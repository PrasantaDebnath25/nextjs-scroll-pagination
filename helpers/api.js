import axios from 'axios';
// import { API, API_KEY, SEARCH_ENDPOINT, DEFAULT_QUERY } from '../config';



/**
 * Function to fetch news articles
 */
export const getArticles = (query = 0, page = 0) => {
	return axios
		.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
		.then((response) => {
			return getRes(response);
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};

/**
 * Filtering response data to
 * only return articles & hits
 */
const getRes = (res) => {
	console.log(res)
	return {
		articles: res.data,
		hits: res.data
	};
};
