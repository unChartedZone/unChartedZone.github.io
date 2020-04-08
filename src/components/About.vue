<template>
<section class="about container">
	<h1 class="header-secondary mb-1">About Me</h1>
	<div class="about-text">
		<p class="paragraph">
			I am a full stack developer from San Diego, California. I have a
			Bachelor's Degree in <span class="highlight">Computer Science</span> from SDSU.
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
	}
}
</style>
