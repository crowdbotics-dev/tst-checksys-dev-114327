import axios from "axios"
const tstchecksysdevAPI = axios.create({
  baseURL: "https://tst-checksys-dev-114327.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstchecksysdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return tstchecksysdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_mod1_list(payload) {
  return tstchecksysdevAPI.get(`/api/v1/mod1/`)
}
function api_v1_mod1_create(payload) {
  return tstchecksysdevAPI.post(`/api/v1/mod1/`, payload)
}
function api_v1_mod1_retrieve(payload) {
  return tstchecksysdevAPI.get(`/api/v1/mod1/${payload.id}/`)
}
function api_v1_mod1_update(payload) {
  return tstchecksysdevAPI.put(`/api/v1/mod1/${payload.id}/`, payload)
}
function api_v1_mod1_partial_update(payload) {
  return tstchecksysdevAPI.patch(`/api/v1/mod1/${payload.id}/`, payload)
}
function api_v1_mod1_destroy(payload) {
  return tstchecksysdevAPI.delete(`/api/v1/mod1/${payload.id}/`)
}
function api_v1_safehouse_list(payload) {
  return tstchecksysdevAPI.get(`/api/v1/safehouse/`)
}
function api_v1_safehouse_create(payload) {
  return tstchecksysdevAPI.post(`/api/v1/safehouse/`, payload)
}
function api_v1_safehouse_retrieve(payload) {
  return tstchecksysdevAPI.get(`/api/v1/safehouse/${payload.id}/`)
}
function api_v1_safehouse_update(payload) {
  return tstchecksysdevAPI.put(`/api/v1/safehouse/${payload.id}/`, payload)
}
function api_v1_safehouse_partial_update(payload) {
  return tstchecksysdevAPI.patch(`/api/v1/safehouse/${payload.id}/`, payload)
}
function api_v1_safehouse_destroy(payload) {
  return tstchecksysdevAPI.delete(`/api/v1/safehouse/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return tstchecksysdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tstchecksysdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstchecksysdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstchecksysdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstchecksysdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstchecksysdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstchecksysdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tstchecksysdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstchecksysdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return tstchecksysdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstchecksysdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstchecksysdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_mod1_list,
  api_v1_mod1_create,
  api_v1_mod1_retrieve,
  api_v1_mod1_update,
  api_v1_mod1_partial_update,
  api_v1_mod1_destroy,
  api_v1_safehouse_list,
  api_v1_safehouse_create,
  api_v1_safehouse_retrieve,
  api_v1_safehouse_update,
  api_v1_safehouse_partial_update,
  api_v1_safehouse_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
