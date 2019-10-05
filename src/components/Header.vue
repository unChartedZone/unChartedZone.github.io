<template>
<nav id="navbar-container" class="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent">
    <!-- This is the button that will appear on smaller screens -->
    <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarTogglerDemo01" 
        aria-controls="navbarTogglerDemo01" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="https://uncharted.zone">UNCHARTEDZONE</a>
        <ul class="nav navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/unChartedZone"><i class="fab fa-github " aria-hidden="true"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://www.linkedin.com/in/ChristianBValdez"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://twitter.com/sounchartedzone"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            </li>
        </ul>
    </div>
</nav>
</template>

<style scoped>
#navbar-container {
    /* background-color: rgba(0, 0, 0, .70) !important; */
    background-color: rgba(0, 0, 0, .7) !important;
}

.nav-item {
	font-size: 20px;
	padding-left: 10px;
}

.nav-link:hover {
	color: white !important;
}
</style>