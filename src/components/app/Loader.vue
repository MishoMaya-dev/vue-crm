<template>
  <div class="app-loader">
    <div class="preloader-wrapper big active">
      <div
        class="spinner-layer"
        :class="colorClass"
      >
        <div class="circle-clipper left">
          <div class="circle" />
        </div>
        <div class="gap-patch">
          <div class="circle" />
        </div>
        <div class="circle-clipper right">
          <div class="circle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    computed: {
      colorClass() {
        const colors = ['blue', 'red', 'green'];
        const color = colors[Math.floor(Math.random() * 3)];
        return `spinner-${color}-only`;
      }
    },
  };
</script>

