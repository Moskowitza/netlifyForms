/* eslint-disable func-names */
const https = require("https")

exports.handler = function(event, context, callback) {
  // The id is passed from the component's fetch
  // try to use the logged in user's id aka: user.id
  const { id } = event.queryStringParameters

  const token = process.env.netlify_access_token

  if (id === undefined) {
    callback("A User id must be specified.", {
      statusCode: 500,
    })
  }

  const options = {
    hostname: "api.netlify.com",
    port: 443,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const queryToken = `access_token=${token}`
  //   A new object is created pulling
  // site_id may be held in the netlify state.json file?
  const opts1 = Object.assign({}, options, {
    path: `/api/v1/sites/${process.env.site_id}/forms?${queryToken}`,
  })

  const req = https.request(opts1, function(res) {
    res.setEncoding("utf8")
    let body = ""

    res.on("data", data => {
      body += data
    })

    res.on("end", function() {
      body = JSON.parse(body)
      // Filter the response for the logged in user
      const form = body.filter(x => x.id === `${id}`)[0]
      const opts2 = Object.assign({}, options, {
        path: `/api/v1/forms/${form.id}/submissions?${queryToken}`,
      })
      //   make a second request for the specific form
      const req2 = https.request(opts2, function(res2) {
        res2.setEncoding("utf8")
        let body2 = ""

        res2.on("data", data => {
          body2 += data
        })

        res2.on("end", function() {
          callback(null, {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            body: body2,
          })
        })
      })

      req2.end()
    })
  })

  req.end()
}
