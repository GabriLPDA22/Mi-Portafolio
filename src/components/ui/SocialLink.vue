<template>
  <a
    :href="url"
    :aria-label="platform"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link"
  >
    <component :is="iconComponent" class="social-icon" />
  </a>
</template>

<script>
export default {
  name: "SocialLink",

  props: {
    platform: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconComponent() {
      const icons = {
        github: "GithubIcon",
        linkedin: "LinkedinIcon",
        twitter: "TwitterIcon",
        email: "EmailIcon",
      };
      return icons[this.platform.toLowerCase()] || "DefaultIcon";
    },
  },
};
</script>

<style scoped>
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 107, 53, 0.15);
  border-color: rgba(255, 107, 53, 0.4);
  color: #ff6b35;
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}
</style>
