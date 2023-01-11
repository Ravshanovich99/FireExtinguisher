<template>
  <div class="footer">
    <footer class="text-center text-lg-start text-muted">
      <section
        class="
          d-flex
          justify-content-center justify-content-lg-between
          p-4
          border-top
        "
      ></section>

      <section>
        <div
          :class="
            $store.state.darkMode
              ? 'container border-bottom-yellow'
              : 'container border-bottom-green'
          "
        >
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  src="../../assets/images/logo-tr.png"
                  class="logo-image"
                  alt="logo-image"
                />
                <h6 class="text-uppercase fw-bold mb-4 logo-name">Florida</h6>
                <p>GIFT FOR YOU</p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Полезные линки</h6>
                <p>
                  <NuxtLink to="/albums" class="text-reset">Альбомы</NuxtLink>
                </p>
                <p>
                  <NuxtLink to="/portrets" class="text-reset"
                    >Портреты</NuxtLink
                  >
                </p>
                <p>
                  <NuxtLink to="/glasses" class="text-reset"
                    >Стеклянные</NuxtLink
                  >
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Контакт</h6>
                <div>
                  <h6>По всем вопросам:</h6>
                  <p>
                    <a href="tel:+998977183407" class="text-reset"
                      >+998(97) 718 34 07</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ClientOnly>
            <div class="social-links">
              <div
                :class="
                  $store.state.darkMode
                    ? 'border-top-yellow'
                    : 'border-top-green'
                "
              >
                <a
                  href="https://www.instagram.com/florida_gift_"
                  class="social-link"
                  ><b-icon class="b-icon" icon="instagram"></b-icon
                ></a>
                <a href="https://www.t.me/florida_gift" class="social-link"
                  ><b-icon class="b-icon" icon="telegram"></b-icon
                ></a>
              </div>
            </div>
          </ClientOnly>
        </div>
      </section>

      <div class="text-center p-4">
        <span class="text-uppercase fw-bold mb-4 logo-name-bottom"
          >Florida</span
        >
        © {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<script>
import './Footer.scss'
export default {}
</script>

<style></style>
