import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
const searchUserdf6724d5984e37f2d51f38f0816f0224 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
    method: 'post',
})

searchUserdf6724d5984e37f2d51f38f0816f0224.definition = {
    methods: ["post"],
    url: '/searchuser',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
searchUserdf6724d5984e37f2d51f38f0816f0224.url = (options?: RouteQueryOptions) => {
    return searchUserdf6724d5984e37f2d51f38f0816f0224.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
searchUserdf6724d5984e37f2d51f38f0816f0224.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
    const searchUserdf6724d5984e37f2d51f38f0816f0224Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
        searchUserdf6724d5984e37f2d51f38f0816f0224Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
            method: 'post',
        })
    
    searchUserdf6724d5984e37f2d51f38f0816f0224.form = searchUserdf6724d5984e37f2d51f38f0816f0224Form
    /**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
const searchUserdf6724d5984e37f2d51f38f0816f0224 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
    method: 'get',
})

searchUserdf6724d5984e37f2d51f38f0816f0224.definition = {
    methods: ["get","head"],
    url: '/searchuser',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
searchUserdf6724d5984e37f2d51f38f0816f0224.url = (options?: RouteQueryOptions) => {
    return searchUserdf6724d5984e37f2d51f38f0816f0224.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
searchUserdf6724d5984e37f2d51f38f0816f0224.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
searchUserdf6724d5984e37f2d51f38f0816f0224.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
    const searchUserdf6724d5984e37f2d51f38f0816f0224Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
        searchUserdf6724d5984e37f2d51f38f0816f0224Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: searchUserdf6724d5984e37f2d51f38f0816f0224.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserController::searchUser
 * @see app/Http/Controllers/UserController.php:10
 * @route '/searchuser'
 */
        searchUserdf6724d5984e37f2d51f38f0816f0224Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: searchUserdf6724d5984e37f2d51f38f0816f0224.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    searchUserdf6724d5984e37f2d51f38f0816f0224.form = searchUserdf6724d5984e37f2d51f38f0816f0224Form

export const searchUser = {
    '/searchuser': searchUserdf6724d5984e37f2d51f38f0816f0224,
    '/searchuser': searchUserdf6724d5984e37f2d51f38f0816f0224,
}

const UserController = { searchUser }

export default UserController