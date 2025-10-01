import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SellersController::index
 * @see app/Http/Controllers/Api/SellersController.php:12
 * @route '/api/sellers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/sellers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SellersController::index
 * @see app/Http/Controllers/Api/SellersController.php:12
 * @route '/api/sellers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SellersController::index
 * @see app/Http/Controllers/Api/SellersController.php:12
 * @route '/api/sellers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SellersController::index
 * @see app/Http/Controllers/Api/SellersController.php:12
 * @route '/api/sellers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SellersController::index
 * @see app/Http/Controllers/Api/SellersController.php:12
 * @route '/api/sellers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SellersController::index
 * @see app/Http/Controllers/Api/SellersController.php:12
 * @route '/api/sellers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SellersController::index
 * @see app/Http/Controllers/Api/SellersController.php:12
 * @route '/api/sellers'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Api\SellersController::store
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/sellers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SellersController::store
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SellersController::store
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SellersController::store
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SellersController::store
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\SellersController::show
 * @see app/Http/Controllers/Api/SellersController.php:23
 * @route '/api/sellers/{seller}'
 */
export const show = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/sellers/{seller}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SellersController::show
 * @see app/Http/Controllers/Api/SellersController.php:23
 * @route '/api/sellers/{seller}'
 */
show.url = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seller: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    seller: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seller: args.seller,
                }

    return show.definition.url
            .replace('{seller}', parsedArgs.seller.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SellersController::show
 * @see app/Http/Controllers/Api/SellersController.php:23
 * @route '/api/sellers/{seller}'
 */
show.get = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SellersController::show
 * @see app/Http/Controllers/Api/SellersController.php:23
 * @route '/api/sellers/{seller}'
 */
show.head = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SellersController::show
 * @see app/Http/Controllers/Api/SellersController.php:23
 * @route '/api/sellers/{seller}'
 */
    const showForm = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SellersController::show
 * @see app/Http/Controllers/Api/SellersController.php:23
 * @route '/api/sellers/{seller}'
 */
        showForm.get = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SellersController::show
 * @see app/Http/Controllers/Api/SellersController.php:23
 * @route '/api/sellers/{seller}'
 */
        showForm.head = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Api\SellersController::update
 * @see app/Http/Controllers/Api/SellersController.php:25
 * @route '/api/sellers/{seller}'
 */
export const update = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/sellers/{seller}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\SellersController::update
 * @see app/Http/Controllers/Api/SellersController.php:25
 * @route '/api/sellers/{seller}'
 */
update.url = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seller: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    seller: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seller: args.seller,
                }

    return update.definition.url
            .replace('{seller}', parsedArgs.seller.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SellersController::update
 * @see app/Http/Controllers/Api/SellersController.php:25
 * @route '/api/sellers/{seller}'
 */
update.put = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\SellersController::update
 * @see app/Http/Controllers/Api/SellersController.php:25
 * @route '/api/sellers/{seller}'
 */
update.patch = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\SellersController::update
 * @see app/Http/Controllers/Api/SellersController.php:25
 * @route '/api/sellers/{seller}'
 */
    const updateForm = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SellersController::update
 * @see app/Http/Controllers/Api/SellersController.php:25
 * @route '/api/sellers/{seller}'
 */
        updateForm.put = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\SellersController::update
 * @see app/Http/Controllers/Api/SellersController.php:25
 * @route '/api/sellers/{seller}'
 */
        updateForm.patch = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Api\SellersController::destroy
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers/{seller}'
 */
export const destroy = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/sellers/{seller}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\SellersController::destroy
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers/{seller}'
 */
destroy.url = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seller: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    seller: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seller: args.seller,
                }

    return destroy.definition.url
            .replace('{seller}', parsedArgs.seller.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SellersController::destroy
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers/{seller}'
 */
destroy.delete = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\SellersController::destroy
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers/{seller}'
 */
    const destroyForm = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SellersController::destroy
 * @see app/Http/Controllers/Api/SellersController.php:0
 * @route '/api/sellers/{seller}'
 */
        destroyForm.delete = (args: { seller: string | number } | [seller: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const sellers = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default sellers