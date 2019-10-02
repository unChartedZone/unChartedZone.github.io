<template>
	<div id="showcase-container" class="container">
		<h1 class="section-header">Showcase</h1>
		<hr>
		<div id="browser">
			<div id="browser-titlebar">
				<div class="radio-buttons">
					<div id="close-radio-btn" class="radio-button"></div>
					<div id="min-radio-btn" class="radio-button"></div>
					<div id="max-radio-btn"  class="radio-button"></div>
				</div>
				<div id="url-bar">
					<p>http://localhost:3000</p>
				</div>
			</div>
			<div id="browser-window">
				<h1>Hello World</h1>
			</div>
		</div>
	</div>
</template>

<style scoped>
#showcase-container {
	padding: 4em 0;
	height: 100%;
}

#browser {
	margin: 1em auto;
	width: 70%;
	height: 70vh;
	border-radius: 7px;
	box-shadow: 0 14px 50px 5px rgba(0,0,0,0.38), 0 2px 10px 0 rgba(0,0,0,0.48);
}

#showcase-header {
	font-family: 'Montserrat';
}

#browser-titlebar {
	display: flex;
	align-items: center;
	width: 100%;
	height: 2.5rem;
	background-color: #EBEBEB;
    border-top-left-radius: 7px;
	border-top-right-radius: 7px;
	box-shadow: 0 0 0 1px #ccc;
}

#close-radio-btn {
	background-color: #FF544E;
}

#min-radio-btn {
	background-color: #FFBE2E;
}

#max-radio-btn {
	background-color: #29C840;
}

#url-bar {
	background-color: #F9F9F9;
	border-radius: 5px;
	height: 70%;
    margin: 0 auto;
	text-align: center;
    width: 40%;
}

#url-bar p {
	font-family: -apple-system,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
	font-size: 16px !important;
	color: #8c8c8c;
}

.radio-buttons {
	position: absolute;
	padding-left: 1rem;
	line-height: 2rem;
}

.radio-button {
	display: inline-block;
	width: 12px;
	height: 12px;
	background-color: #C0C0C0;
	border-radius: 50%;
}

#browser-window {
	padding: 20px;
	width: inherit;
	height: inherit;
}
</style>