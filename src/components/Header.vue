<template>
<nav class="nav d-flex align-center" style="justify-content: space-between;">

	<div class="nav-item nav-logo">CV</div>

	<div class="nav-item nav-links">
		<a href="#" class="nav-link">About Me</a>
		<a href="#" class="nav-link">Portfolio</a>
		<a href="#" class="nav-link">Contact</a>
	</div>

</nav>
</template>

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
		display: inline-block;
		color: black;
		font-size: 1.65rem;
		font-family: $primary-default-font;
		text-decoration: none;
		transition: all .2s;

		&:hover {
			color: $color-primary;
			transform: translateY(-0.2rem) scale(1.02);
		}

		&:not(:last-child) {
			padding: 0 2rem 0 0;
		}
	}
}
</style>