<template>
<section class="home-page container d-flex align-start justify-center col">
	<h2 class="subtitle">Hello 👋, I'm</h2>
	<h1 class="header-primary">Christian Valdez</h1>
	<h2 class="subtitle">California Based Developer</h2>
	<button class="home-btn btn btn-primary my-1">
		<i class="fa fa-chevron-circle-down" />
		About Me
	</button>
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
.subtitle {
	animation: slide-in-right ease-out .7s;
}

.home {
	&-page {
		height: 100vh;
	}
}

.header-primary {
	background-image: linear-gradient(to right, $color-primary, $color-primary-light);
	-webkit-background-clip: text;
	color: transparent;
	animation: slide-in-left ease-out .7s;
}

</style>
