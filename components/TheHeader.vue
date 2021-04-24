<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <nuxt-link
            class="navbar-item subtitle is-4"
            to ="/"
            >
            YouTube Player
            </nuxt-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <div class="find has-addons">
                        <form action="/search" method="get">
                            <div class="find has-addons">
                                <div class="control">
                                    <input name="q" class="input" type="text" placeholder="検索">
                                </div>
                                <div class="control">
                                    <button class="button">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>