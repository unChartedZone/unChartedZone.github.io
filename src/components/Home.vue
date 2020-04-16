<template>
<section class="home-page container d-flex align-start justify-center col">
	<h2 class="header-primary">Hello 👋,</h2>
	<h1 class="header-primary">
		<span>I'm</span>
		<span class="name">Christian Valdez</span>
	</h1>
	<h2 class="subtitle">California Based Developer</h2>
	<a class="home-btn btn btn-primary my-1">
		About Me
		<i class="fa fa-chevron-circle-down" />
	</a>
</section>
</template>

<script>
export default {
	data() {
		return {
			subtitle: 'California Based Developer'
		}
	}
}
</script>

<style lang="scss" scoped>

i {
	padding: 0 0.5rem;
}

.subtitle {
	animation: slide-in-right ease-out .7s;
}

.home {
	&-page {
		height: 100vh;
	}
}

.name {
	background-image: linear-gradient(to right, $color-primary, $color-primary-light);
	-webkit-background-clip: text;
	color: transparent;
	padding: 0 2rem;
}

.header-primary {
	animation: slide-in-left ease-out .7s;
}

</style>
