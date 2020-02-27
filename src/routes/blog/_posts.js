// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "Thoughts on honest web designs",
		date: "02/27/2020 8:28am",
		slug: "honest-web-designs",
		description: "A web application isn't just it's blocks of HTML, CSS rules, or JavaScript technobabble; rather the content and context in which it is consumed.",
		html: `
		<p class="lh-copy measure mt4 mt0-ns">

        Honest web designs depends on perfect harmony between all of the elements 
		on a page. Harmony is determined by relationships or proportions. 
		Proportions are hidden everywhere. words themselves. True web design, 
		therefore, is a matter of tact (consideration, rhythm,
        subtlety) and brutalism. It flows from something rarely appreciated today:
		good taste.
		</p>
		<p class="lh-copy measure mt4 mt0-ns">
		A web designer strives for perfection; perfection is found in 
		between what a website is and <em>isn't.</em> In a time that hungers for
		 tangible novelties, A website is about giving visitors content to enjoy
		and ways to interact with you. In the masterpiece of the browser, the developers's signature 
		is delivered instantaneously to their user.
		</p>
		<p class="lh-copy measure mt4 mt0-ns">
		It can be hard to find
		yourself in an industry that moves as swiftly and and is full
		of so much innovation. 
		Only through constant practice and strictest self-criticism may we
        develop a sense for a perfect passion in the work we do. 
		Unfortunately, most seem content with a middling performance.
		</p>
		<p class="lh-copy measure mt4 mt0-ns">
		Careful placing of elements and the correct usage of semantic HTML
		appear to be unknown or unimportant to some developers, yet for they who 
		investigates, the correct rules are not difficult to discover. Distinction 
		needs to be won by simplicity and restraint. It is equally true that these 
		qualities need to be infused with a certain spirit and vitality, or they 
		degenerate into dullness and mediocrity.
		</p>
		`
	},
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
