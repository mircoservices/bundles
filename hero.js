import * as THREE from "three";
import VANTA_NET from "vanta/src/vanta.net.js";

VANTA_NET({
    THREE,
    el: "#hero-section",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2e3c55,
    backgroundColor: 0xc0c0c,
});

requestAnimationFrame(() => {
    const stickyWrapper = document.querySelector(".sticky_wrapper");
    if (stickyWrapper) {
        stickyWrapper.style.minHeight = window.innerHeight * 10 + "px";
    }
});