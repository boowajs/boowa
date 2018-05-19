const endent = require('endent')

module.exports = endent`
  const cacheName = 'boowa-blog-v1'

  self.addEventListener('install', event => {
    self.skipWaiting()
  })

  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => Promise.all(
        keys.map(key => {
            return caches.delete(key)
        })
      ))
    )
  })

  self.addEventListener('fetch', event => {
    var fetchRequest = event.request.clone()

    event.respondWith(
      caches.open(cacheName).then(cache => {
        return cache.match(fetchRequest).then(matching => {
          return fromNetwork(fetchRequest, 3000).catch(async () => {
            return matching
          })
        }).catch(() => {
          return fromNetwork(fetchRequest).catch(async err => {
            return err
          })
        })
      })
    )
  })

  function fromNetwork (request, timeout) {
    return new Promise((resolve, reject) => {
      if (timeout) {
        var timeoutId = setTimeout(reject, timeout)
      }
      fetch(request).then(response => {
        if (timeout){
          clearTimeout(timeoutId)
        }
        if ((response.status === 200 || response.status === 0) && response.type !== 'error') {
          var responseCache = response.clone()

          caches.open(cacheName)
            .then(cache => {
              cache.put(request, responseCache)
            })
        }
        resolve(response)
      }, reject)
    })
  }
`
