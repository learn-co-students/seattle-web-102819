require 'bundler'
Bundler.require

require_all 'app'
# require_relative '../app/.....'

# DB = {
#   conn: SQLite3::Database.new('school.db')
# }

# DB[:conn].results_as_hash = true

#This is all you need to do to have a connection and communicate
# you don't need to reference this variable.
# Naming DBs: by convention use snake_case.
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/library.db"
)