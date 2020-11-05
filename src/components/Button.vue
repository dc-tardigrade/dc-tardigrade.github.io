<template>
  <button :click="trigger" :class="className">
    Tester mon éligibilité
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: String,
    type: String,
    action: String
  },
  data() {
    return {
      className: 'btn btn--' + this.type,

    }
  },
  methods: {
    trigger: function() {
      if(this.action == 'redirect')
        this.$router.push(this.href);

      if(this.action == 'submit') {
        this.$emit('clicked')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  background: var(--primary);
  box-shadow: 0 0 12px rgba(255, 85, 85, 0.4);
  font-weight: bold;
  font-size: 14px;

  &--primary {
    background: var(--primary);
    border-color: var(--primary);
    color: #fff;

    &:hover {
      background: #fff;
      border-color: #fff;
      color: var(--primary);
    }
  }

  &--white {
    background: #fff;
    border-color: #fff;
    color: var(--primary);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);

    &:hover {
      background: var(--primary);
      border-color: var(--primary);
      color: #fff;
    }
  }
}
</style>