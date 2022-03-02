import { IMAGE_API } from '../config';

/**
 * Function to filter the article response
 */

//Pro created by 03-02-2022
export const filterArticleData = (article) => {
	if (article) {
		const res = {
			headline: article.author,
			time: article.author,
			source: article.author,
			image: article.url
				? IMAGE_API + '/' + article.url
				: '',
			url: article.url,

		};
		return res;
	}
};

/**
 * Shrinking the headline to max 50 characters
 */
export const shrinkHeading = (heading) => {
	if (heading.length > 50) return heading.substring(0, 50) + '...';
	else return heading;
};
