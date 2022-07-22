<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="optionsColor"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    v-bind="attrs"
                    v-on="on"
                    v-text="item.title"
                  />
                </template>
                <v-card>
                  <v-card-title class="text-h5 text-center green">
                    Sign In
                  </v-card-title>
                  <v-card-text>
                    <v-form class="formLogin">
                      <v-text-field
                        v-model="email"
                        label="E-mail"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show = !show"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="success"
                      @click="signIn"
                      class="mr-4 btnLoginForm"
                    >
                      Log in
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <a href="/">
        <img src="../static/logo-white.svg" alt="logo" />
      </a>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import login from '~/api/login.js'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      dialog: false,
      clipped: false,
      drawer: true,
      fixed: false,
      show: false,
      email: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => `The email and password you entered don't match`,
      },
      items: [
        {
          icon: 'mdi-apps',
          title: 'Log in',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
    }
  },

  methods: {
    setTokenAuth(newToken) {
      this.$cookies.set('_token', newToken, {
        path: '/',
      })
    },

    setError(err) {
      console.log(err)
    },

    signIn() {
      axios
        .post('https://b2b.thecornercloud.com/oauth2-token', {
          grant_type: 'password',
          client_id: 'dtGgEgUWUm5XImbmBcgCNmHL-n6pAhIh',
          client_secret:
            'LFZzIRsDXgsqJhYK8FDNKiXs3j7QMBRvrh5zsDVj83t5veIb2ac_IbXze7aZSUl4XNQ39d2sAasKSbzcpErnUo',
          username: 'customer@example.com',
          password: 'Custom4rD4mo*',
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.optionsColor:hover {
  background-color: #3ad159;
}

.formLogin {
  padding: 20px;
}

.btnLoginForm {
  width: 100%;
}
</style>
