<template>
<section class="home-page d-flex align-center justify-center col">
	<h2 class="subtitle">Hello 👋, I am</h2>
	<h1 class="header-primary">Christian Valdez</h1>
	<h2 class="subtitle">California Based Developer</h2>
</section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-page {
	height: 100vh;
}

.header-primary {
	background-image: linear-gradient(to right, $color-primary, $color-primary-light);
	-webkit-background-clip: text;
	color: transparent;
}

</style>
