<template>
<section id="about"  class="about container">
	<h1 class="header-secondary mb-1">About Me</h1>
	<div class="about-text">

		<p class="paragraph">
			I am a full stack developer from San Diego, California. I earned
			my Bachelor's Degree in <span class="highlight">Computer
			Science</span> from SDSU in 2018.
		</p>

		<p class="paragraph">
			There I learned important skills such as data structures, dynamic
			algorithms, and the intricaies of operating systems
		</p>

		<p class="paragraph">
			However, for web development I am completely self taught.
			Starting with the basics of HTML, CSS, and Javascript, I later
			moved onto other UI tools such as Jquery and Bootstrap.
		</p>

	</div>
</section>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.about {
	height: 80vh;

	&-text {
		width: 45%;

		p:not(:last-child) {
			margin: 0 0 2rem 0;
		}
	}
}
</style>
