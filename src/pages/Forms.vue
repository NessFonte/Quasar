<template>
  <q-page class="q-mx-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md col-xs-12 col-sm-12 col-md-6 q-pt-xl"
        >
          <q-input
            filled
            v-model="user.email"
            label="Correo *"
            type="email"
            lazy-rules
            :rules="[ 
              val => val && val.length > 0 || 'Campo obligatorio',
              isValidEmail
              ]"
          />

          <q-input
            filled
            type="password"
            v-model="user.password"
            label="Contraseña *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obligatorio']"
          />

          <q-input
            filled
            type="password"
            v-model="user.password_confirm"
            label="Confirmar contraseña *"
            lazy-rules
            :rules="[ 
              val => val && val.length > 0 || 'Campo obligatorio',
              isSamePassword
              ]"
          />

          <q-checkbox
            rigth-label
            v-model="user.conditions"
            label="Acepto las condiciones y términos"
            checked-icon="task_alt"
            unchecked-icon="highlight_off"
            :style="user.errorInCondition && !user.conditions && 'color: red'"
          />

          <div class="row justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'Forms',

  setup() {
    const user = ref({
      email: '',
      password: '',
      password_confirm: '',
      conditions: false,
      errorInCondition: false,
    })
    const $q = useQuasar()

    return {
      user,

      onSubmit() {
        user.value.errorInCondition = false

        if(!user.value.conditions) {
          $q.notify({
            message: 'Debe aceptar las condiciones de uso',
            icon: 'las la-exclamation-circle',
          })
          user.value.errorInCondition = true
          return
        }

      },

      onReset() {
        user.value = {
          email: '',
          password: '',
          password_confirm: '',
          conditions: false,
          errorInCondition: false,
        }
      },

      isValidEmail( val ) {
          const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
          return emailPattern.test(val) || 'El correo no parece ser válido';
      },

      isSamePassword( val ) {
        return (val === user.value.password) || 'Las contraseñas no son iguales'
      }
    }
  }
})
</script>
