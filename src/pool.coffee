class Pool
  constructor: (cons, size) ->
    @_consfn = cons
    @_size = size
    @_pool = []

  get: () ->
      # # FIXME: Disable pool due to memory leak:
      # if @_pool.length > 0
      #   @_pool.pop()
      # else
      #   @_consfn()
      @_consfn()

  release: (x) ->
      # # FIXME: Disable pool due to memory leak:
      # if @_pool.length < @_size
      #   @_pool.push x

exports.Pool = Pool
