// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "Hello World",
		date: "10/23/2019 11:25pm",
		slug: "hello-world",
		description: "There are no born masters of web development, but self-education may lead in time to prowess.",
		html: `
		<p class="lh-copy measure mt4 mt0-ns">

			BRUTAL web design is more of a science than an opinion.  Mastery of this style is indespensible but it is not everything.  Unswerving taste, the cornerstone of perfection, rests also upon a clear understanding of fundamental syntax and inherent design.  For the most part, flawless brutalism stems partly from a inborn discernment; from empathy.  But empathy will always remain motionless unless a secure understanding can be inspired. Feelings have to mature into knowledge about the consequences of formal decisions. For this reason, there are no born masters of web development, but self-education may lead in time to prowess.
		</p>
		<blockquote class="ml0 mt0 pl4 bl bw2 b--black">
			<p class="lh-copy measure">
			It is wrong to say that there is no arguing about taste when it is good taste that is in question. We are not born with good taste, nor do we come into this world equipped with a real understanding of art. Merely to recognize who or what is represented in a picture has little to do with a real understanding of art. Neither has an uninformed opinion about the proportions of Roman letters. In any case, arguing is senseless. He who wants to convince has to do a better job than others.
			</p>
			<cite class="f6 ttu tracked fs-normal">― Jan Tschichold</cite>
 		</blockquote>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
