```Ruby
require_relative 'config/environment.rb'

desc "This will start a console session"
task :console do
  Pry.start
end

desc "prints goodbye world"
task :print_goodbye do
  puts "GOODBYE"
end
```
