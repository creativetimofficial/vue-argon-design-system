<template>
<div class="footer-container">
    <div class="footer-top-line"></div>
    <div class="footer-middle-line"></div>
    <div class="footer-base-line"></div>
    <footer class="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="http://bardi-davisconstruction.com" target="_blank" rel="noopener">Bardi Davis Construction</a>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <router-link slot="brand" class="navbar-brand" to="/">
                        <img src="img/brand/logo.png" alt="logo">
                    </router-link>
                </div>
                <div class="col-md-4">
                    <ul class="nav nav-footer">
                        <li class="nav-item">
                            <a href="/about" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="/services" class="nav-link" target="_blank" rel="noopener">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="/projects" class="nav-link" target="_blank" rel="noopener">Projects</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a href="/careers" class="nav-link" target="_blank" rel="noopener">Careers</a>
                        </li> -->
                        <li class="nav-item">
                            <a href="/contact" class="nav-link" target="_blank" rel="noopener">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
