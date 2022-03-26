<template>
  <div>{{ msg }}</div>
  <Form :validation-schema="userValid">
    <div>
      <label>氏名</label>
      <Field name="name" type="text" />
      <div>
        <ErrorMessage name="name" />
      </div>
      <label>メール</label>
      <Field name="email" type="email" />
      <div>
        <ErrorMessage name="email" />
      </div>
    </div>
  </Form>
</template>

<script>
// 入力チェックの実装
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
  name: 'ChildComp3',
  props: {msg: String},
  components: {
    Field, Form, ErrorMessage,
  },
  data: function() {
    return {
      userValid: {
        name: yup.string().required('氏名は必須です'),
        email: yup.string().required('メール入力は必須です').email('Eメール形式で入力してください'),
      }
    }
  }
}
</script>
