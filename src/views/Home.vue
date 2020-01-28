<template>
<div>
    <video-background 
    src="/vid/Noble.mp4"
    poster="/images/mainfoto.jpg"
    :sources="[
        {src: '<your-tablet-video-path>.mp4', res: 900, autoplay: true}, 
        {src: '<your-mobile-video-path>.mp4', res: 638, autoplay: true, poster: '<your-mobile-background-image-path>.png'}
    ]"
    style="max-height: 620px; height: 100vh;"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
>
</video-background>

</div>
</template>
<script>
    export default {
    name: "home",
    components: {}
    };
</script>