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
            v-model="name"
            label="Correo *"
            type="email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obligatorio']"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Contraseña *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obligatorio']"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Confirmar contraseña *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obligatorio']"
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Forms'
})
</script>
