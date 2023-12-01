<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link to="/worker">Працівники</router-link> |
        <router-link to="/candidate">Кандидати</router-link> |
        <router-link to="/interview">Співбесіда</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

nav {
    padding: 30px;
    text-align: center;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.active-btn {
    display: flex;
    gap: 10px;
}
.button {
    color: white;
    transition: all 0.3s;
    padding: 5px 10px;
    background-color: #42b983;
    &:hover {
        background-color: #1de88d;
    }
}
.lable {
    display: flex;
    max-width: 300px;
    justify-content: space-between;
    margin-bottom: 10px;
}
</style>
