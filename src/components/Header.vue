<template>
<nav class="nav d-flex align-center" style="justify-content: space-between;">

	<div class="nav-item nav-logo">CV</div>

	<div class="nav-item nav-links">
		<div class="nav-link" @click="scrollJumper('about')"><a>About Me</a> </div>
		<div class="nav-link" @click="scrollJumper('contact')"><a>Portfolio</a></div>
		<div class="nav-link" @click="scrollJumper('contact')"><a>Contact</a></div>
	</div>

</nav>
</template>

<script>
export default {
	methods: {
		scrollJumper(id) {
			let offset = 90 // Size of navbar + 20 pixels for a little padding
			let section = document.getElementById(id)
			console.log(section.offsetTop)
			window.scrollTo(0,section.offsetTop - offset)
		}
	}
}
</script>

<style lang="scss" scoped>
nav {
	height: 7rem;
	position: fixed;
	width: 100%;
	box-shadow: 0px 5px 10px rgba(#000000, .2);
}

.nav {
	background-color: white;

	&-logo {
		font-family: 'Google Sans';
		font-size: 3rem;
	}

	&-item {
		padding: 0 6rem;
	}

	&-link {
		cursor: pointer;
		display: inline-block;
		color: black;
		font-size: 1.65rem;
		font-family: $primary-default-font;
		padding: 0 1rem;
		transition: all .2s;
		user-select: none;

		a {
			text-decoration: none;
		}

		&:hover {
			color: $color-primary;
			transform: translateY(-0.2rem) scale(1.02);
		}
	}
}
</style>