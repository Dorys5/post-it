<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-yellow-light">
        <div class="container-fluid">
          <RouterLink class="navbar-brand text-primary" to="/">Post-it</RouterLink>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link text-primary" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-primary" to="/detail">Detail</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-primary" to="/about">About</RouterLink>
              </li>
            </ul>
            <form class="d-flex ms-auto" role="search">
              <input class="form-control me-2" type="search" placeholder="Search a post-It ....." aria-label="Search">
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
}

.navbar {
  padding: 16px;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
}

.nav-link {
  font-size: 18px;
  margin-right: 16px;
}

.form-control {
  width: 100%;
  max-width: 200px;
}

.bg-yellow-light {
  background-color: #fff9c4 !important;
}

.text-primary {
  color: black !important;
}

.btn-outline-primary {
  color: rgb(31, 120, 192);
  border-color: rgb(35, 68, 214);
}

.btn-outline-primary:hover {
  background-color: rgb(161, 210, 250);
  color: #c1f3fc;
}

.container {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .form-control {
    width: 100%;
  }

  .navbar-nav {
    margin-top: 10px;
  }

  .nav-link {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media (max-width: 576px) {
  .nav-link {
    font-size: 16px;
  }

  .navbar-brand {
    font-size: 20px;
  }
}
</style>
