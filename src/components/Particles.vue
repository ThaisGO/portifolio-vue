<script setup>
const pOptions = {
    background: {
        color: {
            value: "#181818",
        },
    },
    fullScreen: {
        enable: true,
        zIndex: -1,
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};
</script>

<template>
    <div class="particles">
        <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" :options="pOptions" />
    </div>
</template>

<style lang="scss" scoped>
    .particles {
        position:absolute;
        top:0;
        left: 0;
        z-index: -1;
    }
</style>
