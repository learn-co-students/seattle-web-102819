# Rack provides a minimal interface between webservers that support Ruby and Ruby frameworks.

# To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:

# The HTTP response code
# A Hash of headers
# The response body, which must respond to each

require 'rack'
require 'pry'

class App
    def call(environment_hash)
        request = Rack::Request.new(environment_hash)
        response = Rack::Response.new
        code = 200
        headers = {
            "Content-Type" => "text/html"
        }
        if request.path == "/"
            response.write("Welcome to Flatiron School!")
        elsif request.path == "/seattle"
            response.write("Welcome to Flatiron School Seattle!")
        end
        response.finish
        # binding.pry
        # [code, headers, body]
    end
end

run App.new