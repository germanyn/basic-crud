<template functional>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

html, body {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
}

*:not(hr) {
  margin: 0px;
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
}

form, fieldset {
  display: flex;
  flex-direction: column;
}

fieldset {
  border: none;
  margin-inline-start: unset;
  padding-block-start: unset;
  margin-inline-end: unset;
  padding-inline-start: unset;
  padding-inline-end: unset;
  padding-block-end: unset;
  min-inline-size: unset;
}

button,
input[type="button"] {
  border: 1px solid black;
  border-radius: 0.25em;
  height: 36px;
  background-color: unset;
  margin-top: 8px;
  text-transform: uppercase;
  min-width: 72px;
  margin-left: unset;
  margin-right: unset;
  padding: 2px 8px;
  cursor: pointer;
}

button.block,
input[type="button"].block {
  margin-right: initial;
  margin-left: initial;
}

button.icon,
input[type="button"].icon {
  margin: 0;
  height: 36px;
  width: 36px;
  min-width: 12px;
  min-height: 12px;
  border-radius: 100%;
}

button.rounded,
input[type="button"].rounded {
  border-radius: 12px;
}

button.small,
input[type="button"].small {
  height: 24px;
  min-width: 24px;
}

button:focus,
input[type="button"]:focus {
  border-color: blue;
  outline: none;
}

button.primary,
input[type="button"].primary {
  background-color: lightblue;
}

button.flat,
input[type="button"].flat {
  border: none;
}

label {
  font-weight: bold;
  margin-top: 8px;
}

input[type="text"],
input[type="password"],
input[type="search"],
input[type="email"],
input[type="number"] {
  margin-top: 8px;
  padding: 4px;
  box-shadow: none;
  border-radius: 4px;
  height: 36px;
  font-size: 16px;
  flex: 1;
}

.container {
  margin: 18px 8px;
}

@media screen and (min-width: 1000px) {
  .container {
    max-width: 980px;
    margin-right: auto;
    margin-left: auto;
  }
}

.card {
  border: 1px solid black;
  border-radius: 0.25em;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.login, .register {
  width: 300px;
  margin: auto;
}

.text-center {
  text-align: center;
}

.d-flex {
  flex: 1;
}

.d-row {
  display: flex;
  flex-direction: row;
}

.d-column {
  display: flex;
  flex-direction: column;
}

.a-center {
  align-items: center
}

.a-start {
  align-items: start
}

.a-space-between{
  justify-content: space-between;
}

.j-center {
  justify-content: center
}

.flex {
  flex: 1;
}

.bg-green {
  background-color: green;
  color: white;
}

.no-shrink {
  flex-shrink: 0;
}

.m-auto {
  margin: auto;
}

.mr-auto {
  margin-right: auto;
}

.ml-auto {
  margin-left: auto;
}

.text-underline {
  text-decoration: underline;
}

.pt-2 {
  padding-top: 4px;
}

.px-0 {
  padding-right: 0;
  padding-left: 0;
}

.text-blue {
  color: grey;
}

.cursor-pointer {
  cursor: pointer;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
  overflow-x: hidden;
  min-width: 0;
}

.p-relative {
  position: relative;
}

</style>