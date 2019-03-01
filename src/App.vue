<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <router-link tag="li" exact exact-active-class="is-active"  to="/"><a>LiveCentre</a></router-link>
                <router-link  tag="li" active-class="is-active" to="standings"><a>Standings</a></router-link>
            </ul>
        </div>
        <div class="tabs">
            <ul>
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
            </ul>
        </div>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
