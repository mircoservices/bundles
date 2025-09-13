# bundles

- static assets for [mircoservices.de](https://mircoservices.de)
- include via e.g. `https://cdn.jsdelivr.net/gh/mircoservices/bundles/hero.min.js`

## hero loader

```
<script type="module">
	let loaded = false;
  function loadHeroBundle() {
    if (window.innerWidth < 768) return;
    if (loaded) return;
    loaded = true;
    return import("https://cdn.jsdelivr.net/gh/mircoservices/bundles/hero.min.js");
  }
  loadHeroBundle();
  window.addEventListener('resize', loadHeroBundle);
</script>
```
